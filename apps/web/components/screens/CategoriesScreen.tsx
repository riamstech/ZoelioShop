import React, { useState } from 'react';
import { Search, ArrowLeft, SlidersHorizontal, Grid3x3, List } from 'lucide-react';
import { ProductCard, Product } from '../dental/ProductCard';

interface CategoriesScreenProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  onBack?: () => void;
}

export const CategoriesScreen: React.FC<CategoriesScreenProps> = ({
  onProductClick,
  onAddToCart,
  onAddToWishlist,
  onBack,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Instruments', 'Consumables', 'Protective', 'Equipment', 'Hygiene', 'Accessories'];

  const products: Product[] = [
    {
      id: '1',
      name: 'Professional Dental Examination Kit',
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
      name: 'Nitrile Examination Gloves Box',
      price: 24.99,
      originalPrice: 34.99,
      image: 'https://images.unsplash.com/photo-1748064716276-6fb0fc9da94a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZ2xvdmVzJTIwcHJvdGVjdGl2ZXxlbnwxfHx8fDE3NjMyNzI4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 342,
      category: 'Protective',
      inStock: true,
    },
    {
      id: '3',
      name: 'Dental Hygiene Tools Set',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1561328165-f0b762a9508e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBoeWdpZW5lJTIwdG9vbHN8ZW58MXx8fHwxNzYzMjcyODkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      reviews: 89,
      category: 'Hygiene',
      inStock: true,
    },
    {
      id: '4',
      name: 'Dental Implant Starter Kit',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBpbXBsYW50c3xlbnwxfHx8fDE3NjMyNzI4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 45,
      category: 'Instruments',
      badge: 'New',
      inStock: true,
    },
    {
      id: '5',
      name: 'Dental Chair Pro Series',
      price: 3499.99,
      originalPrice: 3999.99,
      image: 'https://images.unsplash.com/photo-1656189721573-51e3197e61b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwY2hhaXIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzMjcyODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      reviews: 67,
      category: 'Equipment',
      inStock: true,
    },
    {
      id: '6',
      name: 'Dental Clinic Setup Package',
      price: 1899.99,
      image: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMTc3OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 23,
      category: 'Equipment',
      inStock: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20 transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-colors">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            {onBack && (
              <button onClick={onBack} className="p-1">
                <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            )}
            <h1 className="text-xl text-gray-900 dark:text-white flex-1">Products</h1>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {viewMode === 'grid' ? (
                <List className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Grid3x3 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent transition-colors"
            />
          </div>

          {/* Filter & Sort */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-colors"
            >
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="px-4 pb-3 overflow-x-auto">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 dark:bg-blue-700 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-4">
        <p className="text-sm text-gray-600 mb-4">
          {products.length} products found
        </p>
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 gap-4' : 'space-y-4'}>
          {products.map((product) => (
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

      {/* Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowFilters(false)}>
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl text-gray-900 mb-4">Filters</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 mb-3">Price Range</h3>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-700">{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-3">Availability</h3>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
