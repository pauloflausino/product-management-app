/* Products service */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
  constructor(private readonly repo: ProductsRepository) {}

  create(dto: CreateProductDto): Product {
    const product: Product = {
      id: uuidv4(),
      ...dto,
    };
    return this.repo.create(product);
  }

  findAll(): Product[] {
    return this.repo.findAll();
  }

  findOne(id: string): Product {
    const product = this.repo.findById(id);
    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }
    return product;
  }

  update(id: string, dto: UpdateProductDto): Product {
    const updated = this.repo.update(id, dto);
    if (!updated) {
      throw new NotFoundException('Produto não encontrado');
    }
    return updated;
  }

  remove(id: string): void {
    const deleted = this.repo.delete(id);
    if (!deleted) {
      throw new NotFoundException('Produto não encontrado');
    }
  }
}
