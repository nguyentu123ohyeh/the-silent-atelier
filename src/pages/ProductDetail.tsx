import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { InquiryModal } from "@/components/products/InquiryModal";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="section-container py-32 text-center">
          <h1 className="text-3xl font-serif mb-6 text-foreground">Archive Piece Not Found</h1>
          <Link to="/shop" className="text-sm uppercase tracking-widest underline underline-offset-8 text-muted-foreground hover:text-foreground transition-colors">
            Return to Collection
          </Link>
        </div>
      </Layout>
    );
  }

  const galleryImages = product.images.gallery;

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="section-container">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-3 h-3" /> Back to Archive
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* --- Image Gallery (Full View) --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Main Image Container */}
              <div className="aspect-[4/5] bg-secondary/30 overflow-hidden flex items-center justify-center border border-border/50">
                <img
                  src={galleryImages[selectedImage]}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain transition-all duration-700"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`min-w-[80px] w-20 aspect-square bg-secondary/50 overflow-hidden transition-all flex items-center justify-center border ${
                      selectedImage === idx 
                        ? "border-foreground opacity-100 shadow-sm" 
                        : "border-transparent opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} view ${idx + 1}`} 
                      className="w-full h-full object-contain p-1" 
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* --- Product Information --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-32 lg:self-start flex flex-col"
            >
              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
                  {product.collection}
                </p>
                <h1 className="text-4xl md:text-5xl font-serif mb-3 text-foreground tracking-tight">
                  {product.name}
                </h1>
                
                {/* Product Price */}
                <p className="text-2xl font-serif text-foreground/80 italic mb-8">
                  {product.price}
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              {/* Specifications Table */}
              <div className="border-t border-border py-8 space-y-4 mb-10">
                <h2 className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Specifications</h2>
                {[
                  { label: "Fiber", value: product.fiber },
                  { label: "Weight", value: product.fabricWeight },
                  { label: "Finish", value: product.threadCount },
                  { label: "Origin", value: product.origin },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between text-sm py-1 border-b border-border/30 last:border-0">
                    <span className="text-muted-foreground font-light">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Bespoke Inquiry Button */}
              <button
                onClick={() => setInquiryOpen(true)}
                className="w-full py-5 bg-foreground text-background text-[11px] uppercase tracking-[0.3em] hover:bg-foreground/90 transition-all mb-12 shadow-md active:scale-[0.98]"
              >
                Inquire for Bespoke Service
              </button>

              {/* Curator's Note Section */}
              <div className="border-t border-border pt-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold" />
                  <h2 className="text-[10px] uppercase tracking-widest text-muted-foreground">Curator's Note</h2>
                </div>
                <blockquote className="font-serif text-xl italic text-muted-foreground leading-relaxed">
                  "{product.curatorNote}"
                </blockquote>
                <p className="mt-4 text-[11px] uppercase tracking-wider text-foreground/60">— Karin Grosnick</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        productName={product.name}
      />
    </Layout>
  );
};

export default ProductDetail;