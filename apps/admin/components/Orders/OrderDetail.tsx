import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Package, MapPin, CreditCard, FileText } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  email: string;
  items: number;
  total: number;
  status: string;
  paymentMethod: string;
  date: string;
  shippingAddress: string;
}

interface OrderDetailProps {
  order: Order;
}

const orderItems = [
  { name: 'Dental Mirror Set', quantity: 2, price: 49.99 },
  { name: 'Scaler Kit Professional', quantity: 1, price: 99.99 },
  { name: 'LED Curing Light', quantity: 1, price: 199.99 },
];

export function OrderDetail({ order }: OrderDetailProps) {
  return (
    <div className="space-y-6">
      {/* Order Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Order Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <p className="text-gray-500">Order ID</p>
              <p className="text-gray-900">{order.id}</p>
            </div>
            <div>
              <p className="text-gray-500">Date</p>
              <p className="text-gray-900">{order.date}</p>
            </div>
            <div>
              <p className="text-gray-500">Status</p>
              <Badge className="bg-blue-100 text-blue-700">{order.status}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Shipping Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900">{order.customer}</p>
            <p className="text-gray-600">{order.shippingAddress}</p>
            <p className="text-gray-600 mt-2">{order.email}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Payment Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <p className="text-gray-500">Method</p>
              <p className="text-gray-900">{order.paymentMethod}</p>
            </div>
            <div>
              <p className="text-gray-500">Total</p>
              <p className="text-gray-900">${order.total.toFixed(2)}</p>
            </div>
            <Badge className="bg-green-100 text-green-700">Paid</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Items Ordered */}
      <Card>
        <CardHeader>
          <CardTitle>Items Ordered</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orderItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex-1">
                  <p className="text-gray-900">{item.name}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  <p className="text-gray-500">${item.price.toFixed(2)} each</p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-4 border-t-2">
              <p className="text-gray-900">Total</p>
              <p className="text-gray-900">${order.total.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Update */}
      <Card>
        <CardHeader>
          <CardTitle>Update Order Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-gray-700 mb-2 block">Change Status</label>
              <Select defaultValue={order.status}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700">Update Status</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <FileText className="w-4 h-4 mr-2" />
              Download Invoice
            </Button>
            <Button variant="outline" className="flex-1">
              Send Notification
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
