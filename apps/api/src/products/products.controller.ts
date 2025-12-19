import { Controller, Post, Body, UsePipes, PipeTransform, BadRequestException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductSchema, DentalProduct } from '@zoelio-shop/types';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: any) {}

  transform(value: any) {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      throw new BadRequestException(result.error);
    }
    return result.data;
  }
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(ProductSchema))
  create(@Body() product: DentalProduct) {
    return this.productsService.create(product);
  }
}
