import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = ["Home", "About", "Services", "Projects", "Contact"];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                document.body.classList.add("scrolled");
            } else {
                document.body.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [menuOpen]);

    return (
        <header className={styles.navbar}>
            <motion.div
                className={styles.inner}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: [0.25, 1, 0.3, 1]
                }}
            >
                <a href="#home" className={styles.logo}>
                    SHELBY <span>WOODCRAFT</span>
                </a>

                <nav className={styles.nav}>
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={styles.link}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <a href="#contact" className={styles.cta}>
                    Get a Quote
                </a>

                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen((p) => !p)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </motion.div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {navItems.map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={styles.mobileLink}
                                onClick={() => setMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                {item}
                            </motion.a>
                        ))}

                        <motion.a
                            href="#contact"
                            className={styles.mobileLink}
                            onClick={() => setMenuOpen(false)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navItems.length * 0.05 }}
                        >
                            Get a Quote
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;