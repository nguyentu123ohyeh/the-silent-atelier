import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-serif text-2xl tracking-[0.15em]">
              GROSNICK
            </span>
            <span className="block text-[10px] tracking-[0.4em] text-primary-foreground/60 mt-1">
              COUTURE
            </span>
            <p className="mt-8 text-sm font-light text-primary-foreground/70 max-w-xs leading-relaxed">
              Artisanal silhouettes for the modern individual. Each piece crafted
              with intention in Syracuse, New York.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-caption text-primary-foreground/60 mb-8">
              Navigation
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm font-light hover:text-sage transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-sm font-light hover:text-sage transition-colors"
              >
                The Archive
              </Link>
              <Link
                to="/about"
                className="text-sm font-light hover:text-sage transition-colors"
              >
                About the Atelier
              </Link>
              <Link
                to="/contact"
                className="text-sm font-light hover:text-sage transition-colors"
              >
                Private Consultation
              </Link>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-caption text-primary-foreground/60 mb-8">
              The Atelier
            </h3>
            <address className="not-italic text-sm font-light leading-relaxed text-primary-foreground/70">
              <p>Chestnut Street 118</p>
              <p>Syracuse, New York 13212</p>
              <p className="mt-4">
                <a
                  href="tel:+15042257457"
                  className="hover:text-sage transition-colors"
                >
                  +1 504 225 7457
                </a>
              </p>
              <p className="mt-2">
                <a
                  href="mailto:wlzdcskr15730@hotmail.com"
                  className="hover:text-sage transition-colors"
                >
                  wlzdcskr15730@hotmail.com
                </a>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-primary-foreground/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/40 tracking-wider">
              © 2024 Grosnick Couture. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/40 tracking-wider italic font-serif">
              "Clothing is the architecture of the soul."
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
