import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, ChevronRight, Shield, Truck, RotateCcw, Minus, Plus } from 'lucide-react';
import { Product } from '../dental/ProductCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { cn } from '../ui/utils';

interface ProductDetailScreenProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onAddToWishlist: (product: Product) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onBack,
  onAddToCart,
  onAddToWishlist,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [product.image, product.image, product.image];

  const reviews = [
    {
      id: '1',
      user: 'Dr. Sarah Johnson',
      rating: 5,
      date: 'Nov 10, 2025',
      comment: 'Excellent quality instruments. Very satisfied with the purchase.',
      verified: true,
    },
    {
      id: '2',
      user: 'Dr. Michael Chen',
      rating: 4,
      date: 'Nov 5, 2025',
      comment: 'Good product, fast delivery. Recommended!',
      verified: true,
    },
  ];

  const relatedProducts: Product[] = [
    {
      id: '10',
      name: 'Dental Mirror Set Professional',
      price: 49.99,
      image: product.image,
      rating: 4.7,
      reviews: 89,
      category: product.category,
      inStock: true,
    },
    {
      id: '11',
      name: 'Dental Scaler Kit',
      price: 129.99,
      image: product.image,
      rating: 4.8,
      reviews: 156,
      category: product.category,
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border z-40 px-4 py-3">
        <div className="flex items-center justify-between">
          <Button onClick={onBack} size="icon" variant="ghost">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => onAddToWishlist(product)}
              size="icon"
              variant="ghost"
            >
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Images */}
      <div className="relative bg-card">
        <ImageWithFallback
          src={images[selectedImage]}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
        {product.badge && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground shadow-lg">
            {product.badge}
          </Badge>
        )}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === selectedImage ? 'w-8 bg-white' : 'w-1.5 bg-white/50'
              )}
            />
          ))}
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Product Info */}
        <div>
          <Badge variant="outline" className="mb-3">
            {product.category}
          </Badge>
          <h1 className="text-2xl text-foreground mb-4 leading-tight">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
              <span className="text-foreground">{product.rating}</span>
            </div>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
            <Badge variant={product.inStock ? "default" : "destructive"} className="bg-green-100 text-green-700">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl text-primary">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <Badge variant="destructive">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
            <Truck className="w-6 h-6 text-primary mb-2" />
            <p className="text-xs text-foreground">Free Shipping</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-accent/5 rounded-xl border border-accent/10">
            <Shield className="w-6 h-6 text-accent mb-2" />
            <p className="text-xs text-foreground">Quality Assured</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
            <RotateCcw className="w-6 h-6 text-purple-600 mb-2" />
            <p className="text-xs text-foreground">Easy Returns</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-card rounded-xl p-5 border border-border">
          <h2 className="text-lg text-foreground mb-3">Description</h2>
          <p className="text-muted-foreground leading-relaxed">
            Professional-grade dental equipment designed for optimal performance and durability. 
            Made from high-quality stainless steel with ergonomic design for comfortable use during extended procedures. 
            Suitable for all dental practices and clinics.
          </p>
        </div>

        {/* Specifications */}
        <div>
          <h2 className="text-lg text-gray-900 mb-3">Specifications</h2>
          <div className="space-y-2">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Material</span>
              <span className="text-gray-900">Stainless Steel</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Brand</span>
              <span className="text-gray-900">Zeolio Pro</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Warranty</span>
              <span className="text-gray-900">2 Years</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">SKU</span>
              <span className="text-gray-900">{product.id}</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg text-gray-900">Reviews</h2>
            <button className="text-sm text-blue-600 flex items-center gap-1">
              See All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-gray-900">{review.user}</p>
                    {review.verified && (
                      <p className="text-xs text-green-600">Verified Purchase</p>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg text-gray-900">Related Products</h2>
            <button className="text-sm text-blue-600 flex items-center gap-1">
              See All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="min-w-[160px] bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <ImageWithFallback
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <p className="text-sm text-gray-900 line-clamp-2 mb-1">
                    {relatedProduct.name}
                  </p>
                  <p className="text-blue-600">${relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border p-4 z-40 shadow-lg">
        <div className="max-w-md mx-auto flex gap-3">
          <div className="flex items-center border border-border rounded-xl bg-background">
            <Button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              variant="ghost"
              size="icon"
              className="h-11 w-11"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="px-4 py-2 border-x border-border min-w-[3rem] text-center">
              {quantity}
            </span>
            <Button
              onClick={() => setQuantity(quantity + 1)}
              variant="ghost"
              size="icon"
              className="h-11 w-11"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <Button
            onClick={() => onAddToCart(product, quantity)}
            disabled={!product.inStock}
            className="flex-1 h-11"
            size="lg"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
