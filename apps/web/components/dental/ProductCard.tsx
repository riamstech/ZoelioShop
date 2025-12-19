import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { cn } from '../ui/utils';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onAddToWishlist,
  onProductClick,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(product);
  };

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300">
      <div className="relative overflow-hidden">
        <div
          className="cursor-pointer overflow-hidden"
          onClick={() => onProductClick?.(product)}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <Badge className="bg-accent text-accent-foreground shadow-md">
              {product.badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive" className="shadow-md">
              -{discount}%
            </Badge>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="secondary"
          onClick={handleWishlist}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white shadow-md"
        >
          <Heart className={cn(
            "w-4 h-4 transition-all",
            isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"
          )} />
        </Button>
      </div>
      
      <div className="p-4">
        <div
          className="cursor-pointer"
          onClick={() => onProductClick?.(product)}
        >
          <Badge variant="outline" className="mb-2 text-xs">
            {product.category}
          </Badge>
          
          <h3 className="text-foreground mb-2 line-clamp-2 min-h-[2.5rem] leading-snug">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3.5 h-3.5",
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-foreground">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl text-primary">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.(product);
          }}
          disabled={!product.inStock}
          className="w-full"
          size="lg"
        >
          <ShoppingCart className="w-4 h-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};
