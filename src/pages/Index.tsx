import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import { products, collections } from "@/data/products";
import heroImage from "@/assets/hero-silk-drape.jpg";
import silkShirt from "@/assets/products/midnight-silk-shirt.jpg";
import cashmereKnit from "@/assets/products/cashmere-structured-knit.jpg";
import woolCoat from "@/assets/products/tailored-wool-coat.jpg";

const collectionImages: Record<string, string> = {
  "midnight-series": silkShirt,
  "architectural-knits": cashmereKnit,
  "tailored-structures": woolCoat,
};

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Slow Zoom */}
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

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-subhead text-bone mb-6"
          >
            Syracuse, New York
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-display text-bone mb-8"
          >
            Grosnick Couture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-bone/80 font-light max-w-2xl mx-auto mb-12"
          >
            Artisanal Silhouettes for the Modern Individual
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/shop"
              className="btn-atelier border border-bone text-bone hover:bg-bone hover:text-charcoal transition-all duration-500"
            >
              Enter the Archive
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
      <section className="py-section bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-caption text-muted-foreground mb-4">
              The Collections
            </p>
            <h2 className="text-headline">Curated Silhouettes</h2>
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
                  <div className="aspect-[3/4] overflow-hidden bg-muted mb-6">
                    <img
                      src={collectionImages[collection.id]}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl mb-2 group-hover:text-sage transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    {collection.fiber} · {collection.description}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="py-section bg-primary text-primary-foreground">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-caption text-primary-foreground/60 mb-8">
              Philosophy
            </p>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-relaxed mb-8">
              "Clothing is the architecture of the soul."
            </blockquote>
            <p className="text-lg text-primary-foreground/70">
              — Karin Grosnick, Creative Director
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-section bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
          >
            <div>
              <p className="text-caption text-muted-foreground mb-4">
                Featured Works
              </p>
              <h2 className="text-headline">From the Archive</h2>
            </div>
            <Link
              to="/shop"
              className="mt-6 md:mt-0 text-caption link-underline"
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
      <section className="py-section bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-caption text-muted-foreground mb-4">
                The Atelier
              </p>
              <h2 className="text-headline mb-6">
                Bespoke Begins with Conversation
              </h2>
              <p className="text-body-elegant text-muted-foreground mb-8">
                Every piece in our archive is made to your exact measurements.
                We invite you to visit our Syracuse atelier for a private
                consultation, where we'll discuss fabric, fit, and the subtle
                details that make clothing truly yours.
              </p>
              <Link to="/contact" className="btn-atelier-primary">
                Request Consultation
              </Link>
            </div>
            <div className="aspect-square bg-primary/5 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-serif text-6xl text-sage mb-4">118</p>
                <p className="text-caption text-muted-foreground">
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
