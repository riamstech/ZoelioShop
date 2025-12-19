import { z } from 'zod';
export declare enum ProductCategory {
    CONSUMABLE = "CONSUMABLE",
    INSTRUMENT = "INSTRUMENT",
    EQUIPMENT = "EQUIPMENT"
}
export declare enum InstrumentMaterial {
    STEEL = "STEEL",
    TITANIUM = "TITANIUM"
}
export declare const ConsumableSchema: z.ZodObject<{
    type: z.ZodLiteral<ProductCategory.CONSUMABLE>;
    batchNumber: z.ZodString;
    expiryDate: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    type: ProductCategory.CONSUMABLE;
    batchNumber: string;
    expiryDate: Date;
}, {
    type: ProductCategory.CONSUMABLE;
    batchNumber: string;
    expiryDate: Date;
}>;
export declare const InstrumentSchema: z.ZodObject<{
    type: z.ZodLiteral<ProductCategory.INSTRUMENT>;
    material: z.ZodNativeEnum<typeof InstrumentMaterial>;
    isReusable: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: ProductCategory.INSTRUMENT;
    material: InstrumentMaterial;
    isReusable: boolean;
}, {
    type: ProductCategory.INSTRUMENT;
    material: InstrumentMaterial;
    isReusable: boolean;
}>;
export declare const EquipmentSchema: z.ZodObject<{
    type: z.ZodLiteral<ProductCategory.EQUIPMENT>;
    serialNumber: z.ZodString;
    warrantyMonths: z.ZodNumber;
    voltage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: ProductCategory.EQUIPMENT;
    serialNumber: string;
    warrantyMonths: number;
    voltage: string;
}, {
    type: ProductCategory.EQUIPMENT;
    serialNumber: string;
    warrantyMonths: number;
    voltage: string;
}>;
export declare const ProductVariantSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<ProductCategory.CONSUMABLE>;
    batchNumber: z.ZodString;
    expiryDate: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    type: ProductCategory.CONSUMABLE;
    batchNumber: string;
    expiryDate: Date;
}, {
    type: ProductCategory.CONSUMABLE;
    batchNumber: string;
    expiryDate: Date;
}>, z.ZodObject<{
    type: z.ZodLiteral<ProductCategory.INSTRUMENT>;
    material: z.ZodNativeEnum<typeof InstrumentMaterial>;
    isReusable: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: ProductCategory.INSTRUMENT;
    material: InstrumentMaterial;
    isReusable: boolean;
}, {
    type: ProductCategory.INSTRUMENT;
    material: InstrumentMaterial;
    isReusable: boolean;
}>, z.ZodObject<{
    type: z.ZodLiteral<ProductCategory.EQUIPMENT>;
    serialNumber: z.ZodString;
    warrantyMonths: z.ZodNumber;
    voltage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: ProductCategory.EQUIPMENT;
    serialNumber: string;
    warrantyMonths: number;
    voltage: string;
}, {
    type: ProductCategory.EQUIPMENT;
    serialNumber: string;
    warrantyMonths: number;
    voltage: string;
}>]>;
export declare const ProductSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    price: z.ZodNumber;
    sku: z.ZodString;
    stock: z.ZodNumber;
    metadata: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<ProductCategory.CONSUMABLE>;
        batchNumber: z.ZodString;
        expiryDate: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        type: ProductCategory.CONSUMABLE;
        batchNumber: string;
        expiryDate: Date;
    }, {
        type: ProductCategory.CONSUMABLE;
        batchNumber: string;
        expiryDate: Date;
    }>, z.ZodObject<{
        type: z.ZodLiteral<ProductCategory.INSTRUMENT>;
        material: z.ZodNativeEnum<typeof InstrumentMaterial>;
        isReusable: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        type: ProductCategory.INSTRUMENT;
        material: InstrumentMaterial;
        isReusable: boolean;
    }, {
        type: ProductCategory.INSTRUMENT;
        material: InstrumentMaterial;
        isReusable: boolean;
    }>, z.ZodObject<{
        type: z.ZodLiteral<ProductCategory.EQUIPMENT>;
        serialNumber: z.ZodString;
        warrantyMonths: z.ZodNumber;
        voltage: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: ProductCategory.EQUIPMENT;
        serialNumber: string;
        warrantyMonths: number;
        voltage: string;
    }, {
        type: ProductCategory.EQUIPMENT;
        serialNumber: string;
        warrantyMonths: number;
        voltage: string;
    }>]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    price: number;
    sku: string;
    stock: number;
    metadata: {
        type: ProductCategory.CONSUMABLE;
        batchNumber: string;
        expiryDate: Date;
    } | {
        type: ProductCategory.INSTRUMENT;
        material: InstrumentMaterial;
        isReusable: boolean;
    } | {
        type: ProductCategory.EQUIPMENT;
        serialNumber: string;
        warrantyMonths: number;
        voltage: string;
    };
    id?: string | undefined;
}, {
    name: string;
    price: number;
    sku: string;
    stock: number;
    metadata: {
        type: ProductCategory.CONSUMABLE;
        batchNumber: string;
        expiryDate: Date;
    } | {
        type: ProductCategory.INSTRUMENT;
        material: InstrumentMaterial;
        isReusable: boolean;
    } | {
        type: ProductCategory.EQUIPMENT;
        serialNumber: string;
        warrantyMonths: number;
        voltage: string;
    };
    id?: string | undefined;
}>;
export type DentalProduct = z.infer<typeof ProductSchema>;
export type ProductVariant = z.infer<typeof ProductVariantSchema>;
