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
        <div className="section-container py-24 text-center">
          <h1 className="text-headline mb-4">Piece Not Found</h1>
          <p className="text-muted-foreground mb-8">
            This piece may no longer be available.
          </p>
          <Link to="/shop" className="btn-atelier-primary">
            Return to Archive
          </Link>
        </div>
      </Layout>
    );
  }

  const galleryImages = product.images.gallery;

  return (
    <Layout>
      <section className="py-12 md:py-20 bg-background">
        <div className="section-container">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-caption text-muted-foreground hover:text-foreground mb-12 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Archive
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="aspect-[4/5] bg-muted overflow-hidden">
                <img
                  src={galleryImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-4">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square w-20 bg-muted overflow-hidden transition-opacity ${
                      selectedImage === index
                        ? "opacity-100 ring-1 ring-foreground"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <p className="text-caption text-muted-foreground mb-4">
                {product.collection}
              </p>
              <h1 className="text-4xl md:text-5xl font-serif mb-6">
                {product.name}
              </h1>
              <p className="text-body-elegant text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="border-t border-border pt-8 mb-8">
                <h2 className="text-caption mb-6">Specifications</h2>
                <dl className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Fiber</dt>
                    <dd>{product.fiber}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Fabric Weight</dt>
                    <dd>{product.fabricWeight}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Thread Count</dt>
                    <dd>{product.threadCount}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Origin</dt>
                    <dd>{product.origin}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Color Palette</dt>
                    <dd>{product.colorPalette}</dd>
                  </div>
                </dl>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setInquiryOpen(true)}
                className="btn-atelier-primary w-full mb-8"
              >
                Inquire for Measurements
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Price: {product.price}
              </p>

              {/* Curator's Note */}
              <div className="border-t border-border pt-8 mt-12">
                <h2 className="text-caption mb-6">Curator's Note</h2>
                <blockquote className="font-serif text-lg italic leading-relaxed text-muted-foreground">
                  {product.curatorNote}
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        productName={product.name}
      />
    </Layout>
  );
};

export default ProductDetail;
