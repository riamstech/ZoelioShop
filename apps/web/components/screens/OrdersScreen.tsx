import React, { useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, ChevronRight, Download } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  items: {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  trackingNumber?: string;
}

interface OrdersScreenProps {
  onOrderClick?: (order: Order) => void;
}

export const OrdersScreen: React.FC<OrdersScreenProps> = ({ onOrderClick }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'shipped' | 'delivered'>('all');

  const orders: Order[] = [
    {
      id: '1',
      orderNumber: 'ORD-2025-001234',
      date: 'Nov 14, 2025',
      status: 'delivered',
      items: [
        {
          id: '1',
          name: 'Professional Dental Examination Kit',
          image: 'https://images.unsplash.com/photo-1758206524132-72a2aa6639e2?w=400',
          quantity: 1,
          price: 249.99,
        },
        {
          id: '2',
          name: 'Nitrile Gloves Box',
          image: 'https://images.unsplash.com/photo-1748064716276-6fb0fc9da94a?w=400',
          quantity: 2,
          price: 24.99,
        },
      ],
      total: 299.97,
      trackingNumber: 'TRK123456789',
    },
    {
      id: '2',
      orderNumber: 'ORD-2025-001235',
      date: 'Nov 15, 2025',
      status: 'shipped',
      items: [
        {
          id: '3',
          name: 'Dental Hygiene Tools Set',
          image: 'https://images.unsplash.com/photo-1561328165-f0b762a9508e?w=400',
          quantity: 1,
          price: 189.99,
        },
      ],
      total: 189.99,
      trackingNumber: 'TRK123456790',
    },
    {
      id: '3',
      orderNumber: 'ORD-2025-001236',
      date: 'Nov 16, 2025',
      status: 'pending',
      items: [
        {
          id: '4',
          name: 'Dental Chair Pro Series',
          image: 'https://images.unsplash.com/photo-1656189721573-51e3197e61b9?w=400',
          quantity: 1,
          price: 3499.99,
        },
      ],
      total: 3499.99,
    },
  ];

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'shipped':
        return <Package className="w-5 h-5 text-blue-600" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-600" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'shipped':
        return 'bg-blue-100 text-blue-700';
      case 'delivered':
        return 'bg-green-100 text-green-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
    }
  };

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 py-3">
          <h1 className="text-xl text-gray-900 mb-3">My Orders</h1>
          
          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: 'all', label: 'All' },
              { id: 'pending', label: 'Pending' },
              { id: 'shipped', label: 'Shipped' },
              { id: 'delivered', label: 'Delivered' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-4 py-4 space-y-4">
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full p-8 inline-flex mb-4">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-lg text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">You haven't placed any orders yet</p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Order Header */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-gray-900">{order.orderNumber}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="text-sm capitalize">{order.status}</span>
                  </div>
                </div>
                {order.trackingNumber && (
                  <p className="text-sm text-gray-600">
                    Tracking: <span className="text-blue-600">{order.trackingNumber}</span>
                  </p>
                )}
              </div>

              {/* Order Items */}
              <div className="p-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-3 mb-3 last:mb-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 line-clamp-2 mb-1">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm text-blue-600">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="text-lg text-gray-900">${order.total.toFixed(2)}</span>
                </div>
                
                <div className="flex gap-2">
                  {order.status === 'delivered' && (
                    <>
                      <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                        Reorder
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4" />
                        Invoice
                      </button>
                    </>
                  )}
                  {order.status === 'shipped' && (
                    <button
                      onClick={() => onOrderClick?.(order)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Track Order
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                  {order.status === 'pending' && (
                    <button className="flex-1 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
