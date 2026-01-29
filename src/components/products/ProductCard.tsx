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
        {/* Image Container with Hover Effect */}
        <div className="product-image-container aspect-[4/5] bg-muted mb-6">
          <img
            src={product.images.primary}
            alt={product.name}
            className="primary-image w-full h-full object-cover"
          />
          <img
            src={product.images.texture}
            alt={`${product.name} texture detail`}
            className="texture-image w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <p className="text-caption text-muted-foreground">
            {product.collection}
          </p>
          <h3 className="font-serif text-xl tracking-wide group-hover:text-sage transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground font-light">
            {product.fiber} · {product.origin}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};
