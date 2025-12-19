import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Upload, Save } from 'lucide-react';
const logo = 'https://placehold.co/100x100?text=Logo';

export function Settings() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-gray-900">Settings</h1>
          <p className="text-gray-500 hidden sm:block">Manage your application settings</p>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
          <Save className="w-4 h-4 mr-2" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="business" className="space-y-4 md:space-y-6">
        <TabsList className="w-full grid grid-cols-2 sm:grid-cols-5 h-auto">
          <TabsTrigger value="business" className="text-xs sm:text-sm">Business Info</TabsTrigger>
          <TabsTrigger value="payment" className="text-xs sm:text-sm">Payment</TabsTrigger>
          <TabsTrigger value="shipping" className="text-xs sm:text-sm">Shipping</TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs sm:text-sm">Notifications</TabsTrigger>
          <TabsTrigger value="security" className="text-xs sm:text-sm">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="business" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Company Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-lg border border-gray-200 flex items-center justify-center bg-white p-2">
                    <img 
                      src={logo} 
                      alt="Zoelio Shop" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Button variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload New Logo
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input defaultValue="Zeolio Shop" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" defaultValue="contact@zeolioshop.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label>Website</Label>
                  <Input type="url" defaultValue="https://www.zeolioshop.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Business Address</Label>
                <Textarea
                  defaultValue="123 Medical Plaza, Suite 500, New York, NY 10001"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Credit Card Payments</p>
                    <p className="text-gray-500">Accept Visa, Mastercard, AmEx</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">PayPal</p>
                    <p className="text-gray-500">Enable PayPal checkout</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Invoice Payment</p>
                    <p className="text-gray-500">Allow payment by invoice (Net 30)</p>
                  </div>
                  <Switch />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <Label>Default Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="cad">CAD ($)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tax Rate (%)</Label>
                  <Input type="number" defaultValue="8.5" step="0.1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipping & Delivery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Standard Shipping Cost</Label>
                  <Input type="number" defaultValue="15.00" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label>Express Shipping Cost</Label>
                  <Input type="number" defaultValue="35.00" step="0.01" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Free Shipping Threshold</Label>
                  <Input type="number" defaultValue="500.00" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label>Processing Time (days)</Label>
                  <Input type="number" defaultValue="2" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Shipping Zones</Label>
                <Select defaultValue="domestic">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="domestic">Domestic Only</SelectItem>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="worldwide">Worldwide</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">New Order Notifications</p>
                    <p className="text-gray-500">Get notified when new orders arrive</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Low Stock Alerts</p>
                    <p className="text-gray-500">Alert when inventory is low</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Support Ticket Alerts</p>
                    <p className="text-gray-500">Notify on new support tickets</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Daily Summary Email</p>
                    <p className="text-gray-500">Receive daily performance summary</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Marketing Emails</p>
                    <p className="text-gray-500">Receive marketing updates</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security & Access Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Two-Factor Authentication</p>
                    <p className="text-gray-500">Add extra security to your account</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Login Alerts</p>
                    <p className="text-gray-500">Get notified of new logins</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">Session Timeout</p>
                    <p className="text-gray-500">Auto logout after inactivity</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="space-y-2 pt-4">
                <Label>Change Password</Label>
                <Input type="password" placeholder="Enter current password" />
                <Input type="password" placeholder="Enter new password" />
                <Input type="password" placeholder="Confirm new password" />
                <Button variant="outline" className="w-full">
                  Update Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
