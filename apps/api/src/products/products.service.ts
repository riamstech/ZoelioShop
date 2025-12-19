import { Injectable } from '@nestjs/common';
import { DentalProduct } from '@zoelio-shop/types';
import { PrismaClient } from '@zoelio-shop/db';

const prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async create(data: DentalProduct) {
    return prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        sku: data.sku,
        stock: data.stock,
        metadata: data.metadata as any,
      },
    });
  }
}
