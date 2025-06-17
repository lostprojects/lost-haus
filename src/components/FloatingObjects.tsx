import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Generate well-distributed positions to prevent collisions
const generateRandomPosition = (index: number, total: number) => {
  // Create a more spread out grid to prevent collisions
  const gridCols = 5; // More columns for better spacing
  const gridRows = Math.ceil(total / gridCols);
  const gridCol = index % gridCols;
  const gridRow = Math.floor(index / gridCols);
  
  // Base position from grid with more spacing
  const baseX = (gridCol * 20) + 10; // 10%, 30%, 50%, 70%, 90%
  const baseY = (gridRow * 300) + 400; // More vertical spacing
  
  // Add controlled randomization to prevent rigid grid
  const randomX = baseX + (Math.random() - 0.5) * 15; // ±7.5% variance
  const randomY = baseY + (Math.random() - 0.5) * 200; // ±100px variance
  
  return {
    left: Math.max(5, Math.min(95, randomX)), // Keep within 5-95%
    top: Math.max(350, randomY) // Start below hero with more space
  };
};

function FloatingObjects() {
  interface FloatingObj {
    src: string;
    size: string;
    left: number;
    top: number;
    opacity: number;
    duration: number;
    delay: number;
    floatRange: number;
    rotateSpeed: number;
  }

  const [objects, setObjects] = useState<FloatingObj[]>([]);

  useEffect(() => {
    const objectData = [
      { src: "/objects/Sun2 Black Transparent.png", size: "w-24 h-24" },
      { src: "/objects/Crescent4 Gold Transparent.png", size: "w-32 h-32" },
      { src: "/objects/Moon1 Black.svg", size: "w-28 h-28" },
      { src: "/objects/5.png", size: "w-40 h-40" },
      { src: "/objects/16.png", size: "w-20 h-20" },
      { src: "/objects/10.png", size: "w-36 h-36" },
      { src: "/objects/7a.png", size: "w-32 h-32" },
      { src: "/objects/7.png", size: "w-44 h-44" },
      { src: "/objects/1a.png", size: "w-36 h-36" },
      { src: "/objects/9.png", size: "w-48 h-48" },
      { src: "/objects/15.png", size: "w-28 h-28" },
      { src: "/objects/39.png", size: "w-40 h-40" },
      { src: "/objects/8.png", size: "w-52 h-52" },
      { src: "/objects/3.png", size: "w-24 h-24" },
      { src: "/objects/1.png", size: "w-32 h-32" },
      { src: "/objects/Vinyl-1.png", size: "w-56 h-56" },
      { src: "/objects/Vinyl-2.png", size: "w-48 h-48" },
      { src: "/objects/Seashell-2.png", size: "w-28 h-28" },
      { src: "/objects/Seashell-1.png", size: "w-32 h-32" },
      { src: "/objects/Lipstick.png", size: "w-20 h-20" },
      { src: "/objects/Heart-1.png", size: "w-40 h-40" },
      { src: "/objects/Frame-3.png", size: "w-36 h-36" },
      { src: "/objects/Duck.png", size: "w-28 h-28" },
      { src: "/objects/Balloon-1.png", size: "w-32 h-32" },
      { src: "/objects/Waves-1.png", size: "w-60 h-16" },
      { src: "/objects/Moon-2.png", size: "w-24 h-24" },
    ];

    const generatedObjects = objectData.map((obj, index) => {
      const position = generateRandomPosition(index, objectData.length);
      return {
        ...obj,
        ...position,
        opacity: 0.8 + Math.random() * 0.2, // 0.8-1.0 opacity (much higher)
        // Slower, more natural animation durations
        duration: 12 + Math.random() * 8, // 12-20 seconds (slower)
        delay: Math.random() * 5, // 0-5 second delay
        // Controlled movement patterns
        floatRange: 30 + Math.random() * 40, // 30-70px float range (smaller to prevent collisions)
        rotateSpeed: (Math.random() - 0.5) * 0.8, // -0.4 to 0.4 rotation multiplier (much slower)
      };
    });

    setObjects(generatedObjects);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {objects.map((obj, index) => (
        <motion.img
          key={index}
          src={obj.src}
          alt=""
          className={obj.size}
          style={{
            position: 'absolute',
            left: `${obj.left}%`,
            top: `${obj.top}px`,
            opacity: obj.opacity,
            zIndex: -10,
          }}
          animate={{
            // Gentle floating motion
            y: [0, -obj.floatRange, obj.floatRange, 0],
            x: [0, obj.floatRange * 0.4, -obj.floatRange * 0.3, 0],
            rotate: [0, 45 * obj.rotateSpeed, 90 * obj.rotateSpeed, 0], // Much slower rotation (max 36° instead of 720°)
            scale: [1, 1.05, 0.98, 1], // Subtle breathing
          }}
          transition={{
            duration: obj.duration,
            delay: obj.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export { FloatingObjects }; 