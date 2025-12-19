import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const salesData = [
  { name: 'Mon', sales: 4500, orders: 45 },
  { name: 'Tue', sales: 5200, orders: 52 },
  { name: 'Wed', sales: 4800, orders: 48 },
  { name: 'Thu', sales: 6100, orders: 61 },
  { name: 'Fri', sales: 7300, orders: 73 },
  { name: 'Sat', sales: 6800, orders: 68 },
  { name: 'Sun', sales: 5400, orders: 54 },
];

const orderStatusData = [
  { name: 'Pending', value: 23, color: '#FFA500' },
  { name: 'Shipped', value: 45, color: '#3B82F6' },
  { name: 'Delivered', value: 156, color: '#10B981' },
  { name: 'Cancelled', value: 8, color: '#EF4444' },
];

const topProducts = [
  { name: 'Dental Mirror Set', sales: 234, revenue: 11700, stock: 45 },
  { name: 'Scaler Kit Professional', sales: 189, revenue: 18900, stock: 23 },
  { name: 'Composite Filling Set', sales: 156, revenue: 23400, stock: 12 },
  { name: 'LED Curing Light', sales: 134, revenue: 26800, stock: 8 },
  { name: 'Extraction Forceps', sales: 98, revenue: 9800, stock: 34 },
];

const lowStockItems = [
  { name: 'LED Curing Light', stock: 8, threshold: 15 },
  { name: 'Composite Filling Set', stock: 12, threshold: 20 },
  { name: 'Scaler Kit Professional', stock: 23, threshold: 30 },
];

export function Dashboard() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 sm:flex-initial">Download Report</Button>
          <Button className="bg-teal-600 hover:bg-teal-700 flex-1 sm:flex-initial">Add Product</Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-gray-500 text-xs md:text-sm">Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-teal-600" />
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 text-lg md:text-2xl">$45,231</div>
            <p className="text-green-600 flex items-center gap-1 mt-1 text-xs">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+20.1% from last month</span>
              <span className="sm:hidden">+20.1%</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-gray-500 text-xs md:text-sm">Total Orders</CardTitle>
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 text-lg md:text-2xl">341</div>
            <p className="text-green-600 flex items-center gap-1 mt-1 text-xs">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+12.5% from last month</span>
              <span className="sm:hidden">+12.5%</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-gray-500 text-xs md:text-sm">Total Users</CardTitle>
            <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 text-lg md:text-2xl">2,845</div>
            <p className="text-green-600 flex items-center gap-1 mt-1 text-xs">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+8.3% from last month</span>
              <span className="sm:hidden">+8.3%</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-gray-500 text-xs md:text-sm">Low Stock Items</CardTitle>
            <Package className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-gray-900 text-lg md:text-2xl">12</div>
            <p className="text-orange-600 flex items-center gap-1 mt-1 text-xs">
              <AlertTriangle className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">Requires attention</span>
              <span className="sm:hidden">Alert</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Sales Trend (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#14b8a6"
                  strokeWidth={2}
                  name="Sales ($)"
                />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Orders"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Order Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}`}
                  outerRadius={window.innerWidth < 768 ? 60 : 80}
                  fill="#8884d8"
                  dataKey="value"
                  style={{ fontSize: '12px' }}
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Top Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 md:space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between pb-3 border-b last:border-0">
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="text-gray-900 text-sm md:text-base truncate">{product.name}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{product.sales} sales</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-gray-900 text-sm md:text-base">${product.revenue.toLocaleString()}</p>
                    <p className="text-gray-500 text-xs md:text-sm">Stock: {product.stock}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 md:space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between pb-3 border-b last:border-0">
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="text-gray-900 text-sm md:text-base truncate">{item.name}</p>
                    <p className="text-gray-500 text-xs md:text-sm">Threshold: {item.threshold} units</p>
                  </div>
                  <div className="text-right shrink-0">
                    <Badge variant="outline" className="border-orange-500 text-orange-700 text-xs">
                      {item.stock} left
                    </Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Inventory
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
