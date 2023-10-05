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
exports.SaldoController = void 0;
const common_1 = require("@nestjs/common");
const saldo_service_1 = require("./saldo.service");
const create_saldo_dto_1 = require("./dto/create-saldo.dto");
const update_saldo_dto_1 = require("./dto/update-saldo.dto");
const search_saldo_dto_1 = require("./dto/search-saldo.dto");
const interfaces_1 = require("../auth/interfaces");
const decorators_1 = require("../auth/decorators");
const usuario_entity_1 = require("../auth/entities/usuario.entity");
const swagger_1 = require("@nestjs/swagger");
let SaldoController = class SaldoController {
    constructor(saldoService) {
        this.saldoService = saldoService;
    }
    create(createSaldoDto) {
        return this.saldoService.create(createSaldoDto);
    }
    findAll(searchSaldo) {
        return this.saldoService.findAll(searchSaldo);
    }
    findOne(term) {
        return this.saldoService.findOne(term);
    }
    update(id, updateSaldoDto, usuario) {
        return this.saldoService.update(id, updateSaldoDto);
    }
    remove(id) {
        return this.saldoService.remove(+id);
    }
};
exports.SaldoController = SaldoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_saldo_dto_1.CreateSaldoDto]),
    __metadata("design:returntype", void 0)
], SaldoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_saldo_dto_1.SearchSaldo]),
    __metadata("design:returntype", void 0)
], SaldoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SaldoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorators_1.GetUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_saldo_dto_1.UpdateSaldoDto,
        usuario_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], SaldoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SaldoController.prototype, "remove", null);
exports.SaldoController = SaldoController = __decorate([
    (0, swagger_1.ApiTags)('Saldo'),
    (0, common_1.Controller)('saldo'),
    (0, decorators_1.Auth)(interfaces_1.ValidRoles.admin, interfaces_1.ValidRoles.superUser, interfaces_1.ValidRoles.user),
    __metadata("design:paramtypes", [saldo_service_1.SaldoService])
], SaldoController);
//# sourceMappingURL=saldo.controller.js.map