import React, { useState } from 'react';
import { Search, Bell, MapPin, Heart, Package, RotateCcw, ChevronRight, Syringe, Droplet, Shield, Scissors, Stethoscope, Box, Sparkles } from 'lucide-react';
import { ProductCard, Product } from '../dental/ProductCard';
import { CategoryCard, Category } from '../dental/CategoryCard';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Logo } from '../Logo';

interface HomeScreenProps {
  onProductClick: (product: Product) => void;
  onCategoryClick: (category: Category) => void;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  onViewAllProducts: () => void;
  onNavigateToOrders: () => void;
  onNavigateToWishlist: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onProductClick,
  onCategoryClick,
  onAddToCart,
  onAddToWishlist,
  onViewAllProducts,
  onNavigateToOrders,
  onNavigateToWishlist,
}) => {
  const [notificationCount] = useState(3);

  const categories: Category[] = [
    { id: '1', name: 'Instruments', icon: Scissors, itemCount: 245, color: 'bg-blue-500' },
    { id: '2', name: 'Consumables', icon: Syringe, itemCount: 189, color: 'bg-teal-500' },
    { id: '3', name: 'Protective', icon: Shield, itemCount: 78, color: 'bg-purple-500' },
    { id: '4', name: 'Equipment', icon: Stethoscope, itemCount: 156, color: 'bg-orange-500' },
    { id: '5', name: 'Hygiene', icon: Droplet, itemCount: 92, color: 'bg-cyan-500' },
    { id: '6', name: 'Accessories', icon: Box, itemCount: 134, color: 'bg-pink-500' },
  ];

  const featuredProducts: Product[] = [
    {
      id: '1',
      name: 'Professional Dental Examination Kit - Complete Set',
      price: 249.99,
      originalPrice: 299.99,
      image: 'https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbnN0cnVtZW50cyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMyNzI4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 156,
      category: 'Instruments',
      badge: 'Featured',
      inStock: true,
    },
    {
      id: '2',
      name: 'Nitrile Examination Gloves - Box of 100',
      price: 24.99,
      originalPrice: 34.99,
      image: 'https://images.unsplash.com/photo-1748064716276-6fb0fc9da94a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZ2xvdmVzJTIwcHJvdGVjdGl2ZXxlbnwxfHx8fDE3NjMyNzI4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 342,
      category: 'Protective',
      badge: 'Best Seller',
      inStock: true,
    },
    {
      id: '3',
      name: 'Dental Hygiene Tools Professional Set',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1561328165-f0b762a9508e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5lJTIwdG9vbHN8ZW58MXx8fHwxNzYzMjcyODkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      reviews: 89,
      category: 'Hygiene',
      inStock: true,
    },
    {
      id: '4',
      name: 'Dental Chair Modern Pro Series',
      price: 3499.99,
      originalPrice: 3999.99,
      image: 'https://images.unsplash.com/photo-1656189721573-51e3197e61b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwY2hhaXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzMjcyODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 67,
      category: 'Equipment',
      badge: 'New',
      inStock: true,
    },
  ];

  const promoSlides = [
    {
      title: 'Winter Sale',
      description: 'Up to 30% off on all instruments',
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600',
    },
    {
      title: 'Bulk Orders',
      description: 'Special pricing for clinics',
      bgColor: 'bg-gradient-to-r from-teal-500 to-teal-600',
    },
    {
      title: 'Free Shipping',
      description: 'On orders over $500',
      bgColor: 'bg-gradient-to-r from-purple-500 to-purple-600',
    },
  ];

  const [currentPromo, setCurrentPromo] = useState(0);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-card to-background border-b border-border sticky top-0 z-40 backdrop-blur-md bg-card/80">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Logo size={40} />
              <div>
                <p className="text-xs text-muted-foreground">Deliver to</p>
                <p className="text-sm text-foreground">New York, NY 10001</p>
              </div>
            </div>
            <Button size="icon" variant="ghost" className="relative">
              <Bell className="w-5 h-5" />
              {notificationCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {notificationCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Search dental products..."
              className="w-full pl-10 pr-4 h-11 bg-background"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Promo Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentPromo * 100}%)` }}
            >
              {promoSlides.map((promo, index) => (
                <div
                  key={index}
                  className={`min-w-full ${promo.bgColor} dark:brightness-90 p-8 text-white relative overflow-hidden transition-all`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 dark:bg-white/5 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <Sparkles className="w-8 h-8 mb-3 text-white/80 dark:text-white/70" />
                    <h2 className="text-2xl mb-2">{promo.title}</h2>
                    <p className="text-white/90 dark:text-white/80 mb-4">{promo.description}</p>
                    <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 dark:bg-white/25 dark:hover:bg-white/35 text-white border-white/30 dark:border-white/40">
                      Shop Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {promoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentPromo ? 'w-8 bg-primary' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={onViewAllProducts}
            className="group bg-card rounded-xl p-4 border border-border hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-primary/10 rounded-xl p-3 mb-3 inline-flex group-hover:bg-primary/20 transition-colors">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <p className="text-sm text-foreground">Shop</p>
          </button>
          
          <button
            onClick={onNavigateToOrders}
            className="group bg-card rounded-xl p-4 border border-border hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-accent/10 rounded-xl p-3 mb-3 inline-flex group-hover:bg-accent/20 transition-colors">
              <RotateCcw className="w-6 h-6 text-accent" />
            </div>
            <p className="text-sm text-foreground">Reorder</p>
          </button>
          
          <button
            onClick={onNavigateToWishlist}
            className="group bg-card rounded-xl p-4 border border-border hover:shadow-lg hover:shadow-pink-500/5 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-pink-50 rounded-xl p-3 mb-3 inline-flex group-hover:bg-pink-100 transition-colors">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <p className="text-sm text-foreground">Wishlist</p>
          </button>
        </div>

        {/* Categories */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl text-foreground">Categories</h2>
              <p className="text-sm text-muted-foreground">Browse by product type</p>
            </div>
            <Button
              onClick={onViewAllProducts}
              variant="ghost"
              size="sm"
              className="text-primary"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={onCategoryClick}
              />
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl text-foreground">Featured Products</h2>
              <p className="text-sm text-muted-foreground">Hand-picked for you</p>
            </div>
            <Button
              onClick={onViewAllProducts}
              variant="ghost"
              size="sm"
              className="text-primary"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={onProductClick}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
