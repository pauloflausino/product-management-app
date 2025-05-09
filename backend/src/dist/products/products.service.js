"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const uuid_1 = require("uuid");
let ProductsService = class ProductsService {
    constructor(repo) {
        this.repo = repo;
    }
    create(dto) {
        const product = Object.assign({ id: (0, uuid_1.v4)() }, dto);
        return this.repo.create(product);
    }
    findAll() {
        return this.repo.findAll();
    }
    findOne(id) {
        const product = this.repo.findById(id);
        if (!product) {
            throw new common_1.NotFoundException('Produto não encontrado');
        }
        return product;
    }
    update(id, dto) {
        const updated = this.repo.update(id, dto);
        if (!updated) {
            throw new common_1.NotFoundException('Produto não encontrado');
        }
        return updated;
    }
    remove(id) {
        const deleted = this.repo.delete(id);
        if (!deleted) {
            throw new common_1.NotFoundException('Produto não encontrado');
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map