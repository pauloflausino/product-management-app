import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersService {
    private orders;
    findAll(): never[];
    findOne(id: number): never;
    create(createOrderDto: CreateOrderDto): {
        customerId: number;
        productIds: number[];
        totalAmount: number;
        status: string;
        id: number;
    };
    update(id: number, updateOrderDto: UpdateOrderDto): never;
    remove(id: number): never;
}
