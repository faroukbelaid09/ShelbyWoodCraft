import { useRef, useEffect } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Luxury Kitchen Suite",
    desc: "Custom walnut kitchen for premium Abuja residence",
    img: "/card1.jpg",
  },
  {
    title: "Executive Office Interior",
    desc: "Modern executive workspace with oak finishing",
    img: "/card2.jpg",
  },
  {
    title: "Penthouse Living Room",
    desc: "Minimalist luxury living space with warm tones",
    img: "/card3.jpg",
  },
  {
    title: "Boutique Hotel Lobby",
    desc: "High-end hospitality wood design system",
    img: "/card4.jpg",
  },
  {
    title: "Luxury Kitchen Suite",
    desc: "Custom walnut kitchen for premium Abuja residence",
    img: "/card1.jpg",
  },
  {
    title: "Executive Office Interior",
    desc: "Modern executive workspace with oak finishing",
    img: "/card2.jpg",
  }
];

function Projects() {
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const imagesLoaded = useRef(new Set());

  useEffect(() => {
    projects.forEach((project) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = project.img;
      link.fetchPriority = 'high';
      document.head.appendChild(link);

      const img = new Image();
      img.src = project.img;
      img.fetchPriority = "high";
      img.decoding = 'sync';

      if (project.img.startsWith('http')) {
        const origin = new URL(project.img).origin;
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = origin;
        document.head.appendChild(preconnect);
      }
    });
  }, []);

  const getX = (e) => e.pageX || e.touches[0].pageX;

  const onStart = (e) => {
    isDown.current = true;
    startX.current = getX(e);
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onEnd = () => {
    isDown.current = false;
  };

  const onMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = getX(e);
    const walk = (x - startX.current) * 1.2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subtitle}>Selected Work</p>
        <h2 className={styles.title}>Crafted Masterpieces</h2>
      </div>

      <div
        className={styles.scrollContainer}
        ref={containerRef}
        onMouseDown={onStart}
        onMouseUp={onEnd}
        onMouseLeave={onEnd}
        onMouseMove={onMove}
        onTouchStart={onStart}
        onTouchEnd={onEnd}
        onTouchMove={onMove}
      >
        {projects.map((p, i) => (
          <div className={styles.card} key={i}>
            <img
              src={p.img}
              alt={p.title}
              className={styles.image}
              loading="eager"
              decoding="sync"
              fetchpriority="high"
              onLoad={(e) => {
                e.target.style.opacity = '1';
                e.target.style.transform = 'scale(1.05)';
              }}
            />
            <div className={styles.overlay}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;