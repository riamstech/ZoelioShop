import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { cn } from '../ui/utils';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  itemCount: number;
  color: string;
}

interface CategoryCardProps {
  category: Category;
  onClick?: (category: Category) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const Icon = category.icon;
  
  return (
    <div
      onClick={() => onClick?.(category)}
      className="group bg-card rounded-xl border border-border p-4 cursor-pointer hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
            category.color
          )}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-foreground mb-1">{category.name}</h3>
      <p className="text-xs text-muted-foreground">{category.itemCount} items</p>
    </div>
  );
};
