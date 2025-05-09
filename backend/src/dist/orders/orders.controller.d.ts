import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): {
        customerId: number;
        productIds: number[];
        totalAmount: number;
        status: string;
        id: number;
    };
    findAll(): never[];
    findOne(id: string): never;
    update(id: string, updateOrderDto: UpdateOrderDto): never;
    remove(id: string): never;
}
