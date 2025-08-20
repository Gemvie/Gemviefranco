"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "motion/react";
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;

export type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

export type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  label?: string;
  onClick?: () => void;
};

export type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
};

export type DockIconProps = {
  className?: string;
  children: React.ReactNode;
  width?: MotionValue<number>;
};

export type DocContextType = {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};

const DockContext = createContext<DocContextType | undefined>(undefined);

function DockProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: DocContextType;
}) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const context = useContext(DockContext);
  if (!context) throw new Error("useDock must be used within DockProvider");
  return context;
}

function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="flex w-full justify-center">
      <motion.div
        onMouseMove={({ pageX }) => mouseX.set(pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "flex w-fit gap-4 rounded-2xl px-4 py-2 shadow-lg overflow-visible",
          className
        )}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        <DockProvider value={{ mouseX, spring, distance, magnification }}>
          {children}
        </DockProvider>
      </motion.div>
    </div>
  );
}

function DockItem({ children, className, onClick, label }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { distance, magnification, mouseX, spring } = useDock();

  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - domRect.x - domRect.width / 2;
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        "relative flex flex-col items-center justify-center",
        className
      )}
      tabIndex={0}
      role="button"
      onClick={onClick}
    >
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement, { width, isHovered })
      )}

      {label && <DockLabel isHovered={isHovered}>{label}</DockLabel>}
    </motion.div>
  );
}

function DockLabel({ children, className, isHovered }: DockLabelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 12 }} // move down
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-blue-500/20 px-2 py-0.5 text-xs text-white shadow-lg backdrop-blur-md",
            className
          )}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
function DockIcon({ children, className, width }: DockIconProps) {
  const widthTransform = useTransform(
    width ?? useMotionValue(40),
    (val) => val / 2
  );

  return (
    <motion.div
      style={{ width: widthTransform }}
      className={cn("flex items-center justify-center", className)}
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel };
