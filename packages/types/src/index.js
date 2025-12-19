"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.ProductVariantSchema = exports.EquipmentSchema = exports.InstrumentSchema = exports.ConsumableSchema = exports.InstrumentMaterial = exports.ProductCategory = void 0;
const zod_1 = require("zod");
// Product Categories
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["CONSUMABLE"] = "CONSUMABLE";
    ProductCategory["INSTRUMENT"] = "INSTRUMENT";
    ProductCategory["EQUIPMENT"] = "EQUIPMENT";
})(ProductCategory || (exports.ProductCategory = ProductCategory = {}));
var InstrumentMaterial;
(function (InstrumentMaterial) {
    InstrumentMaterial["STEEL"] = "STEEL";
    InstrumentMaterial["TITANIUM"] = "TITANIUM";
})(InstrumentMaterial || (exports.InstrumentMaterial = InstrumentMaterial = {}));
// 1. Variant Schemas ( The "Polymorphic" part )
exports.ConsumableSchema = zod_1.z.object({
    type: zod_1.z.literal(ProductCategory.CONSUMABLE),
    batchNumber: zod_1.z.string(),
    expiryDate: zod_1.z.coerce.date(),
});
exports.InstrumentSchema = zod_1.z.object({
    type: zod_1.z.literal(ProductCategory.INSTRUMENT),
    material: zod_1.z.nativeEnum(InstrumentMaterial),
    isReusable: zod_1.z.boolean(),
});
exports.EquipmentSchema = zod_1.z.object({
    type: zod_1.z.literal(ProductCategory.EQUIPMENT),
    serialNumber: zod_1.z.string(),
    warrantyMonths: zod_1.z.number().int().nonnegative(),
    voltage: zod_1.z.string(),
});
// The Discriminated Union for Metadata
exports.ProductVariantSchema = zod_1.z.discriminatedUnion('type', [
    exports.ConsumableSchema,
    exports.InstrumentSchema,
    exports.EquipmentSchema,
]);
// 2. Full Product Schema
exports.ProductSchema = zod_1.z.object({
    id: zod_1.z.string().uuid().optional(),
    name: zod_1.z.string().min(1),
    price: zod_1.z.number().positive(),
    sku: zod_1.z.string().min(1),
    stock: zod_1.z.number().int().nonnegative(),
    metadata: exports.ProductVariantSchema,
});
