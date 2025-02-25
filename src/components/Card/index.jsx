"use client";
import { useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { M_PLUS_1 } from "next/font/google";

function Index({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 50}px)`,
        }}
        className={styles.card}
      >
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.bodyContainer}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.imageContainer}>
            <motion.div style={{ scale: imageScale }} className={styles.inner}>
              <Image fill src={`/images/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Index;
