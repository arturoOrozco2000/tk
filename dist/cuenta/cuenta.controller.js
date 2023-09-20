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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuentaController = void 0;
const common_1 = require("@nestjs/common");
const cuenta_service_1 = require("./cuenta.service");
const create_cuenta_dto_1 = require("./dto/create-cuenta.dto");
const update_cuenta_dto_1 = require("./dto/update-cuenta.dto");
const search_cuenta_dto_1 = require("./dto/search-cuenta.dto");
let CuentaController = class CuentaController {
    constructor(cuentaService) {
        this.cuentaService = cuentaService;
    }
    create(createCuentaDto) {
        return this.cuentaService.create(createCuentaDto);
    }
    findAll(searchCuenta) {
        return this.cuentaService.findAll(searchCuenta);
    }
    findOne(term) {
        return this.cuentaService.findOne(term);
    }
    update(id, updateCuentaDto) {
        return this.cuentaService.update(+id, updateCuentaDto);
    }
    remove(id) {
        return this.cuentaService.remove(+id);
    }
};
exports.CuentaController = CuentaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cuenta_dto_1.CreateCuentaDto]),
    __metadata("design:returntype", void 0)
], CuentaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_cuenta_dto_1.SearchCuenta]),
    __metadata("design:returntype", void 0)
], CuentaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CuentaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cuenta_dto_1.UpdateCuentaDto]),
    __metadata("design:returntype", void 0)
], CuentaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CuentaController.prototype, "remove", null);
exports.CuentaController = CuentaController = __decorate([
    (0, common_1.Controller)('cuenta'),
    __metadata("design:paramtypes", [cuenta_service_1.CuentaService])
], CuentaController);
//# sourceMappingURL=cuenta.controller.js.map