import React, { HTMLAttributes, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

function SectionContainer({
  children,
  className,
  ...rest
}: { children: React.ReactNode } & HTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-75%" });

  return (
    <div
      className={cn(
        "mb-48 flex h-auto flex-col justify-center bg-black",
        className
      )}
      ref={containerRef}
      {...rest}
    >
      <motion.div
        className="mx-auto flex h-full min-h-screen w-fit max-w-screen-2xl flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export { SectionContainer };
