import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        {/* Image Container - Dùng object-contain để hiện full ảnh */}
        <div className="aspect-[4/5] bg-secondary/50 mb-6 overflow-hidden relative flex items-center justify-center">
          <img
            src={product.images.primary}
            alt={product.name}
            className="primary-image w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          />
          {/* Texture detail overlay */}
          <img
            src={product.images.texture}
            alt={`${product.name} texture detail`}
            className="texture-image w-full h-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2 px-1">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {product.collection}
          </p>
          
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-serif text-xl tracking-wide text-foreground">
              {product.name}
            </h3>
            <span className="font-medium text-sm pt-1 shrink-0 text-foreground">
              {product.price}
            </span>
          </div>

          <p className="text-sm text-muted-foreground font-light italic">
            {product.fiber} · {product.origin}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};