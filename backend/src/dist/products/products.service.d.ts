import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
export declare class ProductsService {
    private readonly repo;
    constructor(repo: ProductsRepository);
    create(dto: CreateProductDto): Product;
    findAll(): Product[];
    findOne(id: string): Product;
    update(id: string, dto: UpdateProductDto): Product;
    remove(id: string): void;
}
