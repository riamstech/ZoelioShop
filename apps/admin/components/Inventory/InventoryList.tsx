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
import { Badge } from '../ui/badge';
import { Search, Download, AlertTriangle, TrendingUp } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Label } from '../ui/label';

const mockInventory = [
  {
    id: 'INV-001',
    productName: 'Dental Mirror Set',
    sku: 'DM-001',
    currentStock: 45,
    reorderThreshold: 20,
    supplier: 'MedSupply Co.',
    lastRestocked: '2025-11-01',
    status: 'good',
  },
  {
    id: 'INV-002',
    productName: 'Scaler Kit Professional',
    sku: 'SK-002',
    currentStock: 23,
    reorderThreshold: 30,
    supplier: 'Dental Tools Inc.',
    lastRestocked: '2025-10-28',
    status: 'low',
  },
  {
    id: 'INV-003',
    productName: 'Composite Filling Set',
    sku: 'CF-003',
    currentStock: 12,
    reorderThreshold: 20,
    supplier: 'ProDental Supply',
    lastRestocked: '2025-10-25',
    status: 'low',
  },
  {
    id: 'INV-004',
    productName: 'LED Curing Light',
    sku: 'LC-004',
    currentStock: 8,
    reorderThreshold: 15,
    supplier: 'TechDental Ltd.',
    lastRestocked: '2025-10-20',
    status: 'critical',
  },
  {
    id: 'INV-005',
    productName: 'Extraction Forceps',
    sku: 'EF-005',
    currentStock: 34,
    reorderThreshold: 25,
    supplier: 'Surgical Tools Co.',
    lastRestocked: '2025-11-05',
    status: 'good',
  },
  {
    id: 'INV-006',
    productName: 'Impression Material',
    sku: 'IM-006',
    currentStock: 0,
    reorderThreshold: 30,
    supplier: 'Material Masters',
    lastRestocked: '2025-09-15',
    status: 'out',
  },
];

export function InventoryList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof mockInventory[0] | null>(null);

  const filteredInventory = mockInventory.filter((item) => {
    const matchesSearch =
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'good':
        return <Badge className="bg-green-100 text-green-700">Good Stock</Badge>;
      case 'low':
        return <Badge className="bg-orange-100 text-orange-700">Low Stock</Badge>;
      case 'critical':
        return <Badge className="bg-red-100 text-red-700">Critical</Badge>;
      case 'out':
        return <Badge className="bg-gray-100 text-gray-700">Out of Stock</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const openUpdateDialog = (item: typeof mockInventory[0]) => {
    setSelectedItem(item);
    setIsUpdateDialogOpen(true);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-gray-900">Inventory Management</h1>
          <p className="text-gray-500 hidden sm:block">Track and manage stock levels</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 sm:flex-initial">
            <Download className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Export Report</span>
            <span className="sm:hidden">Export</span>
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 flex-1 sm:flex-initial text-sm">
            <span className="hidden sm:inline">Bulk Update Stock</span>
            <span className="sm:hidden">Update</span>
          </Button>
        </div>
      </div>

      {/* Stock Alerts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-700">Total Items</h3>
              <Package className="w-5 h-5 text-teal-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900">
              {mockInventory.reduce((sum, item) => sum + item.currentStock, 0)}
            </p>
            <p className="text-gray-500">units in stock</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-700">Low Stock Items</h3>
              <AlertTriangle className="w-5 h-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900">
              {mockInventory.filter((i) => i.status === 'low' || i.status === 'critical').length}
            </p>
            <p className="text-gray-500">needs reordering</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-700">Out of Stock</h3>
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900">
              {mockInventory.filter((i) => i.status === 'out').length}
            </p>
            <p className="text-gray-500">urgent action required</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by product name or SKU..."
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
                <SelectItem value="good">Good Stock</SelectItem>
                <SelectItem value="low">Low Stock</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="out">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Threshold</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-gray-900">{item.productName}</TableCell>
                  <TableCell className="text-gray-600">{item.sku}</TableCell>
                  <TableCell className="text-gray-900">{item.currentStock}</TableCell>
                  <TableCell className="text-gray-600">{item.reorderThreshold}</TableCell>
                  <TableCell className="text-gray-600">{item.supplier}</TableCell>
                  <TableCell className="text-gray-600">{item.lastRestocked}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openUpdateDialog(item)}
                    >
                      Update Stock
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Stock - {selectedItem?.productName}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Current Stock</Label>
              <Input type="number" defaultValue={selectedItem?.currentStock} />
            </div>
            <div className="space-y-2">
              <Label>Add Stock</Label>
              <Input type="number" placeholder="Enter quantity to add" />
            </div>
            <div className="space-y-2">
              <Label>Supplier</Label>
              <Input defaultValue={selectedItem?.supplier} />
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setIsUpdateDialogOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                Update Stock
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Package({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  );
}

function TrendingDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
      />
    </svg>
  );
}
