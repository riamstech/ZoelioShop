import React from 'react';
import { ArrowLeft, Trash2, Plus, Minus, Tag } from 'lucide-react';
import { Product } from '../dental/ProductCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CartItem extends Product {
  quantity: number;
}

interface CartScreenProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  onBack?: () => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onBack,
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const recommendedProducts: Product[] = [
    {
      id: 'rec1',
      name: 'Dental Sterilization Pouches',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?w=400',
      rating: 4.7,
      reviews: 234,
      category: 'Consumables',
      inStock: true,
    },
    {
      id: 'rec2',
      name: 'Dental Bib Holders',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1748064716276-6fb0fc9da94a?w=400',
      rating: 4.5,
      reviews: 189,
      category: 'Accessories',
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-40 transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 px-4 py-3 transition-colors">
        <div className="flex items-center gap-3">
          {onBack && (
            <button onClick={onBack} className="p-1">
              <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300 transition-colors" />
            </button>
          )}
          <h1 className="text-xl text-gray-900 dark:text-white transition-colors">Shopping Cart</h1>
          <span className="ml-auto text-gray-500 dark:text-gray-400 transition-colors">({items.length} items)</span>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-8 mb-4 transition-colors">
            <svg className="w-20 h-20 text-gray-400 dark:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-xl text-gray-900 dark:text-white mb-2 transition-colors">Your cart is empty</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6 transition-colors">
            Add some dental products to get started
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="px-4 py-4 space-y-4">
            {/* Cart Items */}
            {items.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm transition-colors">
                <div className="flex gap-3">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-gray-900 dark:text-white mb-1 line-clamp-2 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors">{item.category}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-blue-600 dark:text-blue-400 transition-colors">${item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 dark:text-gray-500 line-through transition-colors">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg transition-colors">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white transition-colors">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Promo Code */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm transition-colors">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-gray-400 dark:text-gray-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 outline-none text-gray-900 dark:text-white bg-transparent placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors"
                />
                <button className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                  Apply
                </button>
              </div>
            </div>

            {/* Recommended Products */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm transition-colors">
              <h3 className="text-gray-900 dark:text-white mb-3 transition-colors">Frequently Bought Together</h3>
              <div className="space-y-3">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="flex gap-3 pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white line-clamp-2 mb-1 transition-colors">
                        {product.name}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 transition-colors">${product.price}</p>
                    </div>
                    <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline self-center transition-colors">
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Summary */}
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 z-40 transition-colors">
            <div className="max-w-md mx-auto">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-400 transition-colors">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 transition-colors">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 transition-colors">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {subtotal > 500 && (
                  <div className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 px-3 py-2 rounded-lg text-sm transition-colors">
                    🎉 You've qualified for free shipping!
                  </div>
                )}
                {subtotal < 500 && (
                  <div className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 px-3 py-2 rounded-lg text-sm transition-colors">
                    Add ${(500 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}
                <div className="flex justify-between text-lg text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-gray-800 transition-colors">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={onCheckout}
                className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
