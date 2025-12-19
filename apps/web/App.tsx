import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { SplashScreen } from './components/screens/SplashScreen';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { RegisterScreen } from './components/screens/RegisterScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { CategoriesScreen } from './components/screens/CategoriesScreen';
import { ProductDetailScreen } from './components/screens/ProductDetailScreen';
import { CartScreen } from './components/screens/CartScreen';
import { OrdersScreen } from './components/screens/OrdersScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { BottomNav, NavScreen } from './components/dental/BottomNav';
import { Product } from './components/dental/ProductCard';
import { Category } from './components/dental/CategoryCard';

type AppScreen = 
  | 'splash' 
  | 'onboarding' 
  | 'login' 
  | 'register' 
  | 'home' 
  | 'categories' 
  | 'product-detail' 
  | 'cart' 
  | 'orders' 
  | 'profile';

interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('splash');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Show splash screen on mount
  useEffect(() => {
    // For demo purposes, we'll skip to login after splash
    // In production, check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
      setIsAuthenticated(true);
      setCurrentScreen('home');
    }
  }, []);

  const handleSplashComplete = () => {
    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
    if (hasSeenOnboarding) {
      setCurrentScreen('login');
    } else {
      setCurrentScreen('onboarding');
    }
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setCurrentScreen('login');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isLoggedIn', 'true');
    setCurrentScreen('home');
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isLoggedIn', 'true');
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
    setCurrentScreen('login');
    setCartItems([]);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('product-detail');
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleAddToWishlist = (product: Product) => {
    // Placeholder for wishlist functionality
    console.log('Added to wishlist:', product);
  };

  const handleBottomNavigation = (screen: NavScreen) => {
    setCurrentScreen(screen);
  };

  const handleCategoryClick = (category: Category) => {
    setCurrentScreen('categories');
  };

  const handleCheckout = () => {
    // Placeholder for checkout flow
    alert('Checkout functionality will be implemented here');
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={handleSplashComplete} />;
      
      case 'onboarding':
        return <OnboardingScreen onComplete={handleOnboardingComplete} />;
      
      case 'login':
        return (
          <LoginScreen
            onLogin={handleLogin}
            onRegister={() => setCurrentScreen('register')}
          />
        );
      
      case 'register':
        return (
          <RegisterScreen
            onRegister={handleRegister}
            onBack={() => setCurrentScreen('login')}
          />
        );
      
      case 'home':
        return (
          <HomeScreen
            onProductClick={handleProductClick}
            onCategoryClick={handleCategoryClick}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onViewAllProducts={() => setCurrentScreen('categories')}
            onNavigateToOrders={() => setCurrentScreen('orders')}
            onNavigateToWishlist={() => alert('Wishlist feature coming soon')}
          />
        );
      
      case 'categories':
        return (
          <CategoriesScreen
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
            onBack={() => setCurrentScreen('home')}
          />
        );
      
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailScreen
            product={selectedProduct}
            onBack={() => setCurrentScreen('home')}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        ) : null;
      
      case 'cart':
        return (
          <CartScreen
            items={cartItems}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveFromCart}
            onCheckout={handleCheckout}
            onBack={() => setCurrentScreen('home')}
          />
        );
      
      case 'orders':
        return <OrdersScreen />;
      
      case 'profile':
        return <ProfileScreen onLogout={handleLogout} />;
      
      default:
        return null;
    }
  };

  const showBottomNav = isAuthenticated && !['splash', 'onboarding', 'login', 'register', 'product-detail'].includes(currentScreen);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
        {renderScreen()}
        
        {showBottomNav && (
          <BottomNav
            activeScreen={currentScreen as NavScreen}
            onNavigate={handleBottomNavigation}
            cartItemCount={cartItems.length}
          />
        )}
      </div>
    </ThemeProvider>
  );
}
