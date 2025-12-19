import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Download, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

const monthlySalesData = [
  { month: 'Jan', sales: 45000, orders: 340, customers: 156 },
  { month: 'Feb', sales: 52000, orders: 398, customers: 178 },
  { month: 'Mar', sales: 48000, orders: 365, customers: 165 },
  { month: 'Apr', sales: 61000, orders: 445, customers: 201 },
  { month: 'May', sales: 73000, orders: 512, customers: 234 },
  { month: 'Jun', sales: 68000, orders: 489, customers: 221 },
  { month: 'Jul', sales: 54000, orders: 412, customers: 189 },
  { month: 'Aug', sales: 67000, orders: 478, customers: 215 },
  { month: 'Sep', sales: 71000, orders: 501, customers: 228 },
  { month: 'Oct', sales: 78000, orders: 545, customers: 247 },
  { month: 'Nov', sales: 82000, orders: 567, customers: 259 },
];

const categoryPerformance = [
  { category: 'Diagnostic Tools', revenue: 125000, growth: 12.5 },
  { category: 'Cleaning Tools', revenue: 98000, growth: 8.3 },
  { category: 'Restorative', revenue: 156000, growth: 15.7 },
  { category: 'Equipment', revenue: 234000, growth: -3.2 },
  { category: 'Surgical Tools', revenue: 89000, growth: 6.8 },
  { category: 'Materials', revenue: 67000, growth: 4.5 },
];

const customerInsights = [
  { metric: 'Total Customers', value: '2,845', change: '+8.3%', trend: 'up' },
  { metric: 'Active Customers', value: '1,234', change: '+12.1%', trend: 'up' },
  { metric: 'Repeat Customers', value: '567', change: '+15.4%', trend: 'up' },
  { metric: 'Churn Rate', value: '3.2%', change: '-1.2%', trend: 'down' },
];

export function Analytics() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-gray-900">Analytics & Reports</h1>
          <p className="text-gray-500 hidden sm:block">Track performance and insights</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select defaultValue="this-month">
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex-1 sm:flex-initial">
            <Calendar className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Custom Range</span>
            <span className="sm:hidden">Custom</span>
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 flex-1 sm:flex-initial">
            <Download className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Export Report</span>
            <span className="sm:hidden">Export</span>
          </Button>
        </div>
      </div>

      {/* Customer Insights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {customerInsights.map((insight, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-gray-500">{insight.metric}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-900">{insight.value}</div>
              <p
                className={`flex items-center gap-1 mt-1 ${
                  insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {insight.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{insight.change} from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sales Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base md:text-lg">Sales Trend (Monthly)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300} className="md:h-[350px]">
            <AreaChart data={monthlySalesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#14b8a6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSales)"
                name="Sales ($)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Orders Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Orders & Customers Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <LineChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Orders"
                />
                <Line
                  type="monotone"
                  dataKey="customers"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  name="New Customers"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base md:text-lg">Category Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <BarChart data={categoryPerformance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" />
                <YAxis dataKey="category" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="revenue" fill="#14b8a6" name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Category Growth Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryPerformance.map((cat, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex-1">
                  <p className="text-gray-900">{cat.category}</p>
                  <p className="text-gray-500">Revenue: ${cat.revenue.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`flex items-center gap-1 ${
                      cat.growth >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {cat.growth >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{cat.growth}% growth</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
