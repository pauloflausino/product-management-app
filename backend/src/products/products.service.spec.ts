/* Products unit test */
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: ProductsRepository;

  beforeEach(() => {
    repository = new ProductsRepository();
    service = new ProductsService(repository);
  });

  it('deve criar um novo produto', () => {
    const dto: CreateProductDto = {
      nome: 'Camiseta',
      categoria: 'Vestuário',
      descricao: 'Camiseta 100% algodão',
      preco: 49.9,
      quantidade_estoque: 100,
    };

    const product = service.create(dto);

    expect(product).toHaveProperty('id');
    expect(product.nome).toBe(dto.nome);
    expect(product.preco).toBe(dto.preco);
  });

  it('deve lançar exceção se o produto não for encontrado', () => {
    expect(() => service.findOne('id-inexistente')).toThrowError('Produto não encontrado');
  });
});
