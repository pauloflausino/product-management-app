export class CreateOrderDto {
  readonly customerId: number = 0;
  readonly productIds: number[] = [];
  readonly totalAmount: number = 0;
  readonly status: string = ''; // Ex: 'pending', 'paid', 'shipped'
}