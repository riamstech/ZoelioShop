import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Upload, X } from 'lucide-react';

interface ProductFormProps {
  onClose: () => void;
}

export function ProductForm({ onClose }: ProductFormProps) {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = () => {
    // Simulate image upload
    setImages([...images, 'https://via.placeholder.com/150']);
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <form className="space-y-6">
      {/* Product Images */}
      <div className="space-y-2">
        <Label>Product Images</Label>
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-square">
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleImageUpload}
            className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:border-teal-500 transition-colors"
          >
            <Upload className="w-6 h-6 text-gray-400" />
            <span className="text-gray-500 mt-1">Upload</span>
          </button>
        </div>
      </div>

      {/* Basic Info */}
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 space-y-2">
          <Label htmlFor="name">Product Name</Label>
          <Input id="name" placeholder="e.g., Dental Mirror Set" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sku">SKU</Label>
          <Input id="sku" placeholder="e.g., DM-001" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="diagnostic">Diagnostic Tools</SelectItem>
              <SelectItem value="cleaning">Cleaning Tools</SelectItem>
              <SelectItem value="restorative">Restorative</SelectItem>
              <SelectItem value="equipment">Equipment</SelectItem>
              <SelectItem value="surgical">Surgical Tools</SelectItem>
              <SelectItem value="materials">Materials</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Enter product description..."
          rows={4}
        />
      </div>

      {/* Specifications */}
      <div className="space-y-2">
        <Label htmlFor="specifications">Specifications</Label>
        <Textarea
          id="specifications"
          placeholder="Enter product specifications (one per line)..."
          rows={3}
        />
      </div>

      {/* Pricing */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price ($)</Label>
          <Input id="price" type="number" placeholder="0.00" step="0.01" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="discount">Discount (%)</Label>
          <Input id="discount" type="number" placeholder="0" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tax">Tax (%)</Label>
          <Input id="tax" type="number" placeholder="0" />
        </div>
      </div>

      {/* Inventory */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="stock">Stock Quantity</Label>
          <Input id="stock" type="number" placeholder="0" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="threshold">Reorder Threshold</Label>
          <Input id="threshold" type="number" placeholder="10" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onClose} className="flex-1">
          Cancel
        </Button>
        <Button type="submit" className="flex-1 bg-teal-600 hover:bg-teal-700">
          Save Product
        </Button>
      </div>
    </form>
  );
}
