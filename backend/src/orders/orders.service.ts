/* Orders service */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  private orders = []; // Substitua com conexão ao banco no futuro

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  create(createOrderDto: CreateOrderDto) {
    const newOrder = {
      id: Date.now(), // apenas como exemplo
      ...createOrderDto,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    const index = this.orders.findIndex((o) => o.customerId === id);
    if (index === -1) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    this.orders[index] = { ...this.orders[index], ...updateOrderDto };
    return this.orders[index];
  }

  remove(id: number) {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index === -1) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    const deleted = this.orders.splice(index, 1);
    return deleted[0];
  }
}
