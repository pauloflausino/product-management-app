import { Product } from './product.entity';
export declare class ProductsRepository {
    private products;
    create(product: Product): Product;
    findAll(): Product[];
    findById(id: string): Product | undefined;
    update(id: string, updates: Partial<Product>): Product | undefined;
    delete(id: string): boolean;
}
