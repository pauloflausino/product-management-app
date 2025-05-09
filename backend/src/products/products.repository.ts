import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsRepository {
  private products: Product[] = [];

  create(product: Product): Product {
    this.products.push(product);
    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  update(id: string, updates: Partial<Product>): Product | undefined {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return undefined;

    this.products[index] = { ...this.products[index], ...updates };
    return this.products[index];
  }

  delete(id: string): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}
