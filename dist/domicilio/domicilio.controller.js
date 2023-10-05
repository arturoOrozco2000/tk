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
exports.DomicilioController = void 0;
const common_1 = require("@nestjs/common");
const domicilio_service_1 = require("./domicilio.service");
const create_domicilio_dto_1 = require("./dto/create-domicilio.dto");
const update_domicilio_dto_1 = require("./dto/update-domicilio.dto");
const search_domicilio_dto_1 = require("./dto/search-domicilio.dto");
const interfaces_1 = require("../auth/interfaces");
const decorators_1 = require("../auth/decorators");
const swagger_1 = require("@nestjs/swagger");
let DomicilioController = class DomicilioController {
    constructor(domicilioService) {
        this.domicilioService = domicilioService;
    }
    create(createDomicilioDto) {
        return this.domicilioService.create(createDomicilioDto);
    }
    findAll(searchDomicilio) {
        return this.domicilioService.findAll(searchDomicilio);
    }
    findOne(term) {
        return this.domicilioService.findOne(term);
    }
    update(id, updateDomicilioDto) {
        return this.domicilioService.update(+id, updateDomicilioDto);
    }
    remove(id) {
        return this.domicilioService.remove(+id);
    }
};
exports.DomicilioController = DomicilioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_domicilio_dto_1.CreateDomicilioDto]),
    __metadata("design:returntype", void 0)
], DomicilioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_domicilio_dto_1.SearchDomicilio]),
    __metadata("design:returntype", void 0)
], DomicilioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DomicilioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_domicilio_dto_1.UpdateDomicilioDto]),
    __metadata("design:returntype", void 0)
], DomicilioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DomicilioController.prototype, "remove", null);
exports.DomicilioController = DomicilioController = __decorate([
    (0, swagger_1.ApiTags)('Domicilio'),
    (0, common_1.Controller)('domicilio'),
    (0, decorators_1.Auth)(interfaces_1.ValidRoles.admin, interfaces_1.ValidRoles.superUser, interfaces_1.ValidRoles.user),
    __metadata("design:paramtypes", [domicilio_service_1.DomicilioService])
], DomicilioController);
//# sourceMappingURL=domicilio.controller.js.map