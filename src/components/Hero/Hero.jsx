import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const videoRef = useRef(null);

  return (
    <section className={styles.hero}>

      <motion.video
        ref={videoRef}
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1.03 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <source src="/hero.mp4" type="video/mp4" preload="metadata"/>
      </motion.video>

      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3 }}
      />

      {/* CONTENT */}
      <div className={styles.content}>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20, blur: 10 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1 }}
        >
          SHELBY WOODCRAFT • ABUJA
        </motion.p>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 50, scale: 1.05 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          Crafting Wood Into <span>Luxury Spaces</span>
        </motion.h1>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          Bespoke furniture, interiors, and architectural woodwork designed for premium living.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <button className={styles.primary}>Explore Work</button>
          <button className={styles.secondary}>Contact</button>
        </motion.div>
      </div>

      {/* glow */}
      <motion.div
        className={styles.glow}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </section>
  );
}

export default Hero;