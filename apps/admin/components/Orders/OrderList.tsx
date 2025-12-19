import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { OrderDetail } from './OrderDetail';
import { Search, MoreVertical, Eye, Download, Printer } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const mockOrders = [
  {
    id: 'ORD-1001',
    customer: 'Dr. Sarah Johnson',
    email: 'sarah.j@clinic.com',
    items: 3,
    total: 449.97,
    status: 'delivered',
    paymentMethod: 'Credit Card',
    date: '2025-11-15',
    shippingAddress: '123 Medical Plaza, Suite 200, Boston, MA 02108',
  },
  {
    id: 'ORD-1002',
    customer: 'Smile Dental Clinic',
    email: 'orders@smiledental.com',
    items: 5,
    total: 789.95,
    status: 'shipped',
    paymentMethod: 'Invoice',
    date: '2025-11-14',
    shippingAddress: '456 Dental Ave, New York, NY 10001',
  },
  {
    id: 'ORD-1003',
    customer: 'Dr. Michael Chen',
    email: 'm.chen@dental.com',
    items: 2,
    total: 299.98,
    status: 'pending',
    paymentMethod: 'PayPal',
    date: '2025-11-16',
    shippingAddress: '789 Health St, Los Angeles, CA 90001',
  },
  {
    id: 'ORD-1004',
    customer: 'Elite Dental Group',
    email: 'procurement@elitedental.com',
    items: 8,
    total: 1249.92,
    status: 'shipped',
    paymentMethod: 'Credit Card',
    date: '2025-11-13',
    shippingAddress: '321 Care Blvd, Chicago, IL 60601',
  },
  {
    id: 'ORD-1005',
    customer: 'Dr. Emily Roberts',
    email: 'e.roberts@clinic.com',
    items: 1,
    total: 199.99,
    status: 'cancelled',
    paymentMethod: 'Credit Card',
    date: '2025-11-12',
    shippingAddress: '654 Treatment Ln, Miami, FL 33101',
  },
];

export function OrderList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[0] | null>(null);

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-700">Pending</Badge>;
      case 'shipped':
        return <Badge className="bg-blue-100 text-blue-700">Shipped</Badge>;
      case 'delivered':
        return <Badge className="bg-green-100 text-green-700">Delivered</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-700">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-gray-900">Orders</h1>
          <p className="text-gray-500 hidden sm:block">Manage and track customer orders</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 sm:flex-initial">
            <Download className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button variant="outline" className="flex-1 sm:flex-initial">
            <Printer className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Print</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by order ID or customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="text-gray-900">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="text-gray-900">{order.customer}</p>
                      <p className="text-gray-500">{order.email}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600">{order.items}</TableCell>
                  <TableCell className="text-gray-900">${order.total.toFixed(2)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-gray-600">{order.paymentMethod}</TableCell>
                  <TableCell className="text-gray-600">{order.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSelectedOrder(order)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="w-4 h-4 mr-2" />
                          Download Invoice
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Printer className="w-4 h-4 mr-2" />
                          Print Invoice
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Order Details - {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          {selectedOrder && <OrderDetail order={selectedOrder} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
