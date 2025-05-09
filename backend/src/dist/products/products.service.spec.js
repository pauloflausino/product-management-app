"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_service_1 = require("./products.service");
const products_repository_1 = require("./products.repository");
describe('ProductsService', () => {
    let service;
    let repository;
    beforeEach(() => {
        repository = new products_repository_1.ProductsRepository();
        service = new products_service_1.ProductsService(repository);
    });
    it('deve criar um novo produto', () => {
        const dto = {
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
//# sourceMappingURL=products.service.spec.js.map