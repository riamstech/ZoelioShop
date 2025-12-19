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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Search, MoreVertical, Eye, MessageSquare, UserCheck } from 'lucide-react';

const mockTickets = [
  {
    id: 'TKT-1001',
    customer: 'Dr. Sarah Johnson',
    email: 'sarah.j@clinic.com',
    subject: 'Product delivery delayed',
    category: 'Shipping',
    priority: 'high',
    status: 'pending',
    created: '2025-11-15 10:30 AM',
    lastUpdate: '2025-11-16 9:15 AM',
  },
  {
    id: 'TKT-1002',
    customer: 'Smile Dental Clinic',
    email: 'orders@smiledental.com',
    subject: 'Wrong item received',
    category: 'Order Issue',
    priority: 'urgent',
    status: 'pending',
    created: '2025-11-16 8:00 AM',
    lastUpdate: '2025-11-16 8:00 AM',
  },
  {
    id: 'TKT-1003',
    customer: 'Dr. Michael Chen',
    email: 'm.chen@dental.com',
    subject: 'Product specification inquiry',
    category: 'Product Info',
    priority: 'low',
    status: 'resolved',
    created: '2025-11-14 2:30 PM',
    lastUpdate: '2025-11-15 11:20 AM',
  },
  {
    id: 'TKT-1004',
    customer: 'Elite Dental Group',
    email: 'procurement@elitedental.com',
    subject: 'Bulk order pricing',
    category: 'Sales',
    priority: 'medium',
    status: 'in progress',
    created: '2025-11-15 3:45 PM',
    lastUpdate: '2025-11-16 10:00 AM',
  },
  {
    id: 'TKT-1005',
    customer: 'Dr. Emily Roberts',
    email: 'e.roberts@clinic.com',
    subject: 'Refund request',
    category: 'Returns',
    priority: 'high',
    status: 'escalated',
    created: '2025-11-13 1:15 PM',
    lastUpdate: '2025-11-16 9:30 AM',
  },
];

export function SupportList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<typeof mockTickets[0] | null>(null);

  const filteredTickets = mockTickets.filter((ticket) => {
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-700">Pending</Badge>;
      case 'in progress':
        return <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>;
      case 'resolved':
        return <Badge className="bg-green-100 text-green-700">Resolved</Badge>;
      case 'escalated':
        return <Badge className="bg-red-100 text-red-700">Escalated</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <Badge className="bg-red-100 text-red-700">Urgent</Badge>;
      case 'high':
        return <Badge className="bg-orange-100 text-orange-700">High</Badge>;
      case 'medium':
        return <Badge className="bg-blue-100 text-blue-700">Medium</Badge>;
      case 'low':
        return <Badge className="bg-gray-100 text-gray-700">Low</Badge>;
      default:
        return <Badge>{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-gray-900">Support & Helpdesk</h1>
          <p className="text-gray-500 hidden sm:block">Manage customer queries and complaints</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 sm:flex-initial text-sm">Assign to Me</Button>
          <Button className="bg-teal-600 hover:bg-teal-700 flex-1 sm:flex-initial">
            <MessageSquare className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Send Broadcast</span>
            <span className="sm:hidden">Broadcast</span>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <Card>
          <CardHeader className="pb-2">
            <p className="text-gray-500">Total Tickets</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-900">{mockTickets.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <p className="text-gray-500">Pending</p>
          </CardHeader>
          <CardContent>
            <p className="text-orange-600">
              {mockTickets.filter((t) => t.status === 'pending').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <p className="text-gray-500">In Progress</p>
          </CardHeader>
          <CardContent>
            <p className="text-blue-600">
              {mockTickets.filter((t) => t.status === 'in progress').length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <p className="text-gray-500">Resolved</p>
          </CardHeader>
          <CardContent>
            <p className="text-green-600">
              {mockTickets.filter((t) => t.status === 'resolved').length}
            </p>
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
                placeholder="Search by ticket ID, customer, or subject..."
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
                <SelectItem value="in progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="escalated">Escalated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Update</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="text-gray-900">{ticket.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="text-gray-900">{ticket.customer}</p>
                      <p className="text-gray-500">{ticket.email}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900">{ticket.subject}</TableCell>
                  <TableCell className="text-gray-600">{ticket.category}</TableCell>
                  <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                  <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                  <TableCell className="text-gray-600">{ticket.lastUpdate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setSelectedTicket(ticket)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserCheck className="w-4 h-4 mr-2" />
                          Assign to Staff
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Add Note
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

      <Dialog open={!!selectedTicket} onOpenChange={() => setSelectedTicket(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Ticket Details - {selectedTicket?.id}</DialogTitle>
          </DialogHeader>
          {selectedTicket && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500">Customer</p>
                  <p className="text-gray-900">{selectedTicket.customer}</p>
                  <p className="text-gray-600">{selectedTicket.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Created</p>
                  <p className="text-gray-900">{selectedTicket.created}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Subject</p>
                <p className="text-gray-900">{selectedTicket.subject}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-500">Category</p>
                  <p className="text-gray-900">{selectedTicket.category}</p>
                </div>
                <div>
                  <p className="text-gray-500">Priority</p>
                  {getPriorityBadge(selectedTicket.priority)}
                </div>
                <div>
                  <p className="text-gray-500">Status</p>
                  {getStatusBadge(selectedTicket.status)}
                </div>
              </div>
              <div>
                <p className="text-gray-500 mb-2">Update Status</p>
                <Select defaultValue={selectedTicket.status}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="escalated">Escalated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <p className="text-gray-500 mb-2">Add Internal Note</p>
                <Textarea placeholder="Enter notes or communication history..." rows={4} />
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setSelectedTicket(null)} className="flex-1">
                  Close
                </Button>
                <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                  Update & Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
