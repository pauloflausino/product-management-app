"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    constructor() {
        this.products = [];
    }
    create(product) {
        this.products.push(product);
        return product;
    }
    findAll() {
        return this.products;
    }
    findById(id) {
        return this.products.find(p => p.id === id);
    }
    update(id, updates) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1)
            return undefined;
        this.products[index] = Object.assign(Object.assign({}, this.products[index]), updates);
        return this.products[index];
    }
    delete(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1)
            return false;
        this.products.splice(index, 1);
        return true;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map