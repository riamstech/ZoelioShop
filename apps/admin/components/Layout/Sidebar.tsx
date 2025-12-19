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
  ChevronLeft,
} from 'lucide-react';
const logo = 'https://placehold.co/100x100?text=Logo';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
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

export function Sidebar({ currentPage, onNavigate, collapsed, onToggleCollapse }: SidebarProps) {
  return (
    <div
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="Zoelio Shop" 
                className="h-12 w-auto object-contain"
              />
            </div>
          )}
          {collapsed && (
            <div className="w-full flex items-center justify-center">
              <img 
                src={logo} 
                alt="Zoelio Shop" 
                className="h-10 w-10 object-contain"
              />
            </div>
          )}
          <button
            onClick={onToggleCollapse}
            className={`p-1 hover:bg-gray-100 rounded-md transition-colors shrink-0 ${
              collapsed ? 'absolute -right-3 top-5 bg-white border border-gray-200 shadow-sm' : ''
            }`}
          >
            <ChevronLeft
              className={`w-5 h-5 text-gray-600 transition-transform ${
                collapsed ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
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
                    title={collapsed ? item.label : ''}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
