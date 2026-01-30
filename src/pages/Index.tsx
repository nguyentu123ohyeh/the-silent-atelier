import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products, collections } from "@/data/products";
import heroImage from "@/assets/hero-silk-drape.jpg";

// 1. CẬP NHẬT MAPPING ẢNH: Phải khớp chính xác với ID trong file products.ts mới
const collectionImages: Record<string, string> = {
  "the-silk-archive": "https://m.media-amazon.com/images/I/81yQYAr7N3L._AC_SX569_.jpg",
  "linen-essentials": "https://m.media-amazon.com/images/I/81+oQBvBR-L._AC_SY550_.jpg",
  "architectural-knits": "https://m.media-amazon.com/images/I/81-1Wz2P9gL._AC_SX569_.jpg",
};

const Index = () => {
  // Lấy 3 sản phẩm đầu tiên để hiển thị phần Featured
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Silk fabric draped on mannequin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-background" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12px] uppercase tracking-[0.4em] text-bone mb-6"
          >
            Syracuse, New York
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-serif text-bone mb-8"
          >
            Grosnick Couture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-bone/80 font-light max-w-2xl mx-auto mb-12 italic"
          >
            "Artisanal Silhouettes for the Modern Individual"
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/shop"
              className="px-10 py-4 border border-bone text-bone text-[11px] uppercase tracking-[0.3em] hover:bg-bone hover:text-charcoal transition-all duration-500"
            >
              Enter the Archive
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-gradient-to-b from-bone/0 via-bone/50 to-bone/0"
          />
        </motion.div>
      </section>

      {/* Collections Section */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              The Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-serif">Curated Silhouettes</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {collections.map((collection, index) => (
              <motion.article
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link to="/shop" className="group block">
                  {/* Container ảnh: HIỆN FULL ẢNH VÀ CÓ MÀU */}
                  <div className="aspect-[3/4] overflow-hidden bg-secondary/30 mb-6 flex items-center justify-center border border-border/50">
                    <img
                      src={collectionImages[collection.id]}
                      alt={collection.name}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-gold transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {collection.fiber} · {collection.description}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-24 bg-foreground text-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-8">
              Philosophy
            </p>
            <blockquote className="text-3xl md:text-4xl font-serif italic leading-relaxed mb-8">
              "Clothing is the architecture of the soul."
            </blockquote>
            <p className="text-sm uppercase tracking-widest opacity-80">
              — Karin Grosnick, Creative Director
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Featured Works
              </p>
              <h2 className="text-4xl font-serif">From the Archive</h2>
            </div>
            <Link
              to="/shop"
              className="mt-6 md:mt-0 text-[10px] uppercase tracking-widest border-b border-foreground pb-1 hover:text-gold hover:border-gold transition-all"
            >
              View All Pieces
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Atelier CTA */}
      <section className="py-24 bg-secondary/20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                The Atelier
              </p>
              <h2 className="text-4xl font-serif mb-6 leading-tight">
                Bespoke Begins with Conversation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                Every piece in our archive is made to your exact measurements.
                We invite you to contact us for a private consultation in Syracuse, 
                where we'll discuss fiber, fit, and the subtle details that make clothing truly yours.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-foreground/80 transition-all"
              >
                Request Consultation
              </Link>
            </div>
            <div className="aspect-square bg-white flex items-center justify-center border border-border shadow-sm">
              <div className="text-center p-8">
                <p className="font-serif text-8xl text-gold/30 mb-4">118</p>
                <p className="text-[12px] uppercase tracking-[0.4em] text-muted-foreground leading-loose">
                  Chestnut Street
                  <br />
                  Syracuse, New York
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;