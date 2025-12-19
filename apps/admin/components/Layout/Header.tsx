import { Bell, Search, Menu, X } from 'lucide-react';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Warehouse,
  Users,
  Tag,
  BarChart3,
  Headphones,
  Settings as SettingsIcon,
} from 'lucide-react';
const logo = 'https://placehold.co/100x100?text=Logo';

interface HeaderProps {
  onToggleSidebar: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  mobileMenuOpen: boolean;
}

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'products', icon: Package, label: 'Products' },
  { id: 'orders', icon: ShoppingCart, label: 'Orders' },
  { id: 'inventory', icon: Warehouse, label: 'Inventory' },
  { id: 'users', icon: Users, label: 'Users' },
  { id: 'promotions', icon: Tag, label: 'Promotions' },
  { id: 'analytics', icon: BarChart3, label: 'Analytics' },
  { id: 'support', icon: Headphones, label: 'Support' },
  { id: 'settings', icon: SettingsIcon, label: 'Settings' },
];

export function Header({ onToggleSidebar, currentPage, onNavigate, mobileMenuOpen }: HeaderProps) {
  return (
    <>
      <header className="h-14 md:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 shrink-0">
        <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg shrink-0"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2">
            <img 
              src={logo} 
              alt="Zoelio Shop" 
              className="h-9 w-auto object-contain"
            />
          </div>

          {/* Search - Hidden on small mobile */}
          <div className="relative flex-1 max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 bg-gray-50 border-gray-200 h-9"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          {/* Search icon for small mobile */}
          <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="relative p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="w-5 h-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-red-500 text-white">
              3
            </Badge>
          </button>
          <div className="flex items-center gap-2 md:gap-3">
            <Avatar className="w-8 h-8 md:w-9 md:h-9">
              <AvatarFallback className="bg-teal-100 text-teal-700">AD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-gray-800">Admin User</p>
              <p className="text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={onToggleSidebar}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="flex items-center justify-center">
              <img 
                src={logo} 
                alt="Zoelio Shop" 
                className="h-12 w-auto object-contain"
              />
            </SheetTitle>
          </SheetHeader>
          <nav className="py-4">
            <ul className="space-y-1 px-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-teal-50 text-teal-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
