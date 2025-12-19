import { z } from 'zod';

// Product Categories
export enum ProductCategory {
  CONSUMABLE = 'CONSUMABLE',
  INSTRUMENT = 'INSTRUMENT',
  EQUIPMENT = 'EQUIPMENT',
}

export enum InstrumentMaterial {
  STEEL = 'STEEL',
  TITANIUM = 'TITANIUM',
}

// 1. Variant Schemas ( The "Polymorphic" part )
export const ConsumableSchema = z.object({
  type: z.literal(ProductCategory.CONSUMABLE),
  batchNumber: z.string(),
  expiryDate: z.coerce.date(), 
});

export const InstrumentSchema = z.object({
  type: z.literal(ProductCategory.INSTRUMENT),
  material: z.nativeEnum(InstrumentMaterial),
  isReusable: z.boolean(),
});

export const EquipmentSchema = z.object({
  type: z.literal(ProductCategory.EQUIPMENT),
  serialNumber: z.string(),
  warrantyMonths: z.number().int().nonnegative(),
  voltage: z.string(),
});

// The Discriminated Union for Metadata
export const ProductVariantSchema = z.discriminatedUnion('type', [
  ConsumableSchema,
  InstrumentSchema,
  EquipmentSchema,
]);

// 2. Full Product Schema
export const ProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1),
  price: z.number().positive(),
  sku: z.string().min(1),
  stock: z.number().int().nonnegative(),
  metadata: ProductVariantSchema,
});

export type DentalProduct = z.infer<typeof ProductSchema>;
export type ProductVariant = z.infer<typeof ProductVariantSchema>;
