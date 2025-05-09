import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly service;
    constructor(service: ProductsService);
    create(dto: CreateProductDto): import("./product.entity").Product;
    findAll(): import("./product.entity").Product[];
    findOne(id: string): import("./product.entity").Product;
    update(id: string, dto: UpdateProductDto): import("./product.entity").Product;
    remove(id: string): {
        message: string;
    };
}
