import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/products/ProductCard";
import {
  products,
  fiberTypes,
  colorPalettes,
  occasions,
} from "@/data/products";

const Shop = () => {
  const [selectedFiber, setSelectedFiber] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (selectedFiber && product.fiber !== selectedFiber) return false;
      if (selectedColor && product.colorPalette !== selectedColor) return false;
      if (selectedOccasion && product.occasion !== selectedOccasion)
        return false;
      return true;
    });
  }, [selectedFiber, selectedColor, selectedOccasion]);

  const clearFilters = () => {
    setSelectedFiber(null);
    setSelectedColor(null);
    setSelectedOccasion(null);
  };

  const hasActiveFilters = selectedFiber || selectedColor || selectedOccasion;

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-caption text-muted-foreground mb-4">
              The Archive
            </p>
            <h1 className="text-display mb-6">Our Collection</h1>
            <p className="text-body-elegant text-muted-foreground">
              Each piece represents months of development, sourcing, and
              refinement. Made to order, made to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-t border-b border-border bg-background sticky top-24 z-40">
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-8">
              {/* Fiber Type */}
              <div className="flex items-center gap-3">
                <span className="text-caption text-muted-foreground">
                  Fiber
                </span>
                <div className="flex gap-2">
                  {fiberTypes.map((fiber) => (
                    <button
                      key={fiber}
                      onClick={() =>
                        setSelectedFiber(selectedFiber === fiber ? null : fiber)
                      }
                      className={`text-xs tracking-wider px-3 py-1.5 transition-colors ${
                        selectedFiber === fiber
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {fiber}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Palette */}
              <div className="flex items-center gap-3">
                <span className="text-caption text-muted-foreground">
                  Palette
                </span>
                <div className="flex gap-2">
                  {colorPalettes.map((color) => (
                    <button
                      key={color}
                      onClick={() =>
                        setSelectedColor(selectedColor === color ? null : color)
                      }
                      className={`text-xs tracking-wider px-3 py-1.5 transition-colors ${
                        selectedColor === color
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div className="flex items-center gap-3">
                <span className="text-caption text-muted-foreground">
                  Occasion
                </span>
                <div className="flex gap-2">
                  {occasions.map((occasion) => (
                    <button
                      key={occasion}
                      onClick={() =>
                        setSelectedOccasion(
                          selectedOccasion === occasion ? null : occasion
                        )
                      }
                      className={`text-xs tracking-wider px-3 py-1.5 transition-colors ${
                        selectedOccasion === occasion
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {occasion}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-xs tracking-wider text-muted-foreground hover:text-foreground underline"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-12">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "piece" : "pieces"} in the
                archive
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-headline mb-4">No pieces found</p>
              <p className="text-muted-foreground mb-8">
                Try adjusting your filters to discover more from our archive.
              </p>
              <button
                onClick={clearFilters}
                className="btn-atelier-outline"
              >
                View All Pieces
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
