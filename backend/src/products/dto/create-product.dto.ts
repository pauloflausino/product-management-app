export class CreateProductDto {
  nome: string = '';
  categoria: string = '';
  descricao: string = '';
  preco: number = 0;
  quantidade_estoque: number = 0;
}