import React from 'react';
import { User, MapPin, CreditCard, Bell, Shield, HelpCircle, FileText, LogOut, ChevronRight, Award, Gift, Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { Switch } from '../ui/switch';

interface ProfileScreenProps {
  onLogout: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onLogout }) => {
  const { theme, toggleTheme } = useTheme();
  
  const user = {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@dentalclinic.com',
    phone: '+1 (555) 123-4567',
    clinic: 'Bright Smile Dental Clinic',
    loyaltyPoints: 1250,
  };

  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Personal Information', badge: null },
        { icon: MapPin, label: 'Addresses', badge: '2' },
        { icon: CreditCard, label: 'Payment Methods', badge: '1' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', badge: null },
        { icon: Shield, label: 'Privacy & Security', badge: null },
      ],
    },
    {
      title: 'Rewards',
      items: [
        { icon: Award, label: 'Loyalty Program', badge: `${user.loyaltyPoints} pts` },
        { icon: Gift, label: 'Refer & Earn', badge: 'New' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help Center', badge: null },
        { icon: FileText, label: 'Terms & Policies', badge: null },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20 transition-colors">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-teal-500 dark:from-blue-700 dark:to-teal-600 px-4 pt-8 pb-20 transition-colors">
        <h1 className="text-xl text-white mb-6">Profile</h1>
        
        {/* User Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg transition-colors">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-colors">
              <User className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-colors" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg text-gray-900 dark:text-white transition-colors">{user.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{user.clinic}</p>
            </div>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors">
              <svg className="w-4 h-4 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="transition-colors">{user.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 transition-colors">
              <svg className="w-4 h-4 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="transition-colors">{user.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 -mt-12 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm text-center transition-colors">
            <p className="text-2xl text-blue-600 dark:text-blue-400 mb-1">12</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Orders</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm text-center transition-colors">
            <p className="text-2xl text-teal-600 dark:text-teal-400 mb-1">8</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Wishlist</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm text-center transition-colors">
            <p className="text-2xl text-purple-600 dark:text-purple-400 mb-1">5</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Reviews</p>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="px-4 space-y-4">
        {/* Dark Mode Toggle Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-colors">
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">Appearance</h3>
          </div>
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
                <span className="text-gray-900 dark:text-white">Dark Mode</span>
              </div>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-blue-600"
              />
            </div>
          </div>
        </div>

        {menuSections.map((section) => (
          <div key={section.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden transition-colors">
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-sm text-gray-500 dark:text-gray-400">{section.title}</h3>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="flex-1 text-left text-gray-900 dark:text-white">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-colors">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-colors rounded-lg"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Zeolio Dental v1.0.0</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">© 2025 Zeolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
