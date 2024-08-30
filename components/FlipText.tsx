'use client'
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const DURATION = 0.8
const STAGGER = 0.2

export const FlipText: React.FC<PropsWithChildren> = ({ children }: { children: string }) => {
  return <motion.div
    initial="initial"
    animate={["initial", "hovered"]}
    className="overflow-hidden inline-block relative whitespace-nowrap">
    <div>
      {children.split("").map((l, i) => {
        return <motion.span
          className="inline-block"
          transition={{
            delay: STAGGER * i,
            duration: DURATION,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "reverse"
          }}
          key={l + i}
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}>
          {l}
        </motion.span>
      })}
    </div>

    <div className="absolute inset-0">
      {children.split("").map((l, i) => {
        return <motion.span
          className="inline-block"
          transition={{
            delay: STAGGER * i,
            duration: DURATION,
            ease: "easeInOut",
            repeatDelay: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          key={l + i}
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}>
          {l}
        </motion.span>
      })}
    </div>
  </motion.div>
}
