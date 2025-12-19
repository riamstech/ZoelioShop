import { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Dashboard } from './components/Dashboard/Dashboard';
import { ProductList } from './components/Products/ProductList';
import { OrderList } from './components/Orders/OrderList';
import { InventoryList } from './components/Inventory/InventoryList';
import { UserList } from './components/Users/UserList';
import { PromotionList } from './components/Promotions/PromotionList';
import { Analytics } from './components/Analytics/Analytics';
import { SupportList } from './components/Support/SupportList';
import { Settings } from './components/Settings/Settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductList />;
      case 'orders':
        return <OrderList />;
      case 'inventory':
        return <InventoryList />;
      case 'users':
        return <UserList />;
      case 'promotions':
        return <PromotionList />;
      case 'analytics':
        return <Analytics />;
      case 'support':
        return <SupportList />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header
          onToggleSidebar={() => setMobileMenuOpen(!mobileMenuOpen)}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          mobileMenuOpen={mobileMenuOpen}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
