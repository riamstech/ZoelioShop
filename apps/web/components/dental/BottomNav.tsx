import React from 'react';
import { Home, Package, ShoppingCart, User, Grid3x3 } from 'lucide-react';
import { Badge } from '../ui/badge';
import { cn } from '../ui/utils';

export type NavScreen = 'home' | 'categories' | 'cart' | 'orders' | 'profile';

interface BottomNavProps {
  activeScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
  cartItemCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeScreen,
  onNavigate,
  cartItemCount = 0,
}) => {
  const navItems = [
    { id: 'home' as NavScreen, label: 'Home', icon: Home },
    { id: 'categories' as NavScreen, label: 'Categories', icon: Grid3x3 },
    { id: 'cart' as NavScreen, label: 'Cart', icon: ShoppingCart },
    { id: 'orders' as NavScreen, label: 'Orders', icon: Package },
    { id: 'profile' as NavScreen, label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom z-50 shadow-lg">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around px-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center flex-1 py-2 px-2 relative rounded-xl transition-all duration-300",
                  isActive && "bg-primary/10"
                )}
              >
                <div className="relative mb-1">
                  <Icon
                    className={cn(
                      "w-6 h-6 transition-all duration-300",
                      isActive ? "text-primary scale-110" : "text-muted-foreground"
                    )}
                  />
                  {item.id === 'cart' && cartItemCount > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {cartItemCount > 9 ? '9+' : cartItemCount}
                    </Badge>
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
