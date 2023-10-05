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
exports.AportacionController = void 0;
const common_1 = require("@nestjs/common");
const aportacion_service_1 = require("./aportacion.service");
const create_aportacion_dto_1 = require("./dto/create-aportacion.dto");
const update_aportacion_dto_1 = require("./dto/update-aportacion.dto");
const search_aportacion_dto_1 = require("./dto/search-aportacion.dto");
const decorators_1 = require("../auth/decorators");
const interfaces_1 = require("../auth/interfaces");
const swagger_1 = require("@nestjs/swagger");
let AportacionController = class AportacionController {
    constructor(aportacionService) {
        this.aportacionService = aportacionService;
    }
    create(createAportacionDto) {
        return this.aportacionService.create(createAportacionDto);
    }
    findAll(searchAportacion) {
        return this.aportacionService.findAll(searchAportacion);
    }
    findOne(term) {
        return this.aportacionService.findOne(term);
    }
    update(id, updateAportacionDto) {
        return this.aportacionService.update(+id, updateAportacionDto);
    }
    remove(id) {
        return this.aportacionService.remove(+id);
    }
};
exports.AportacionController = AportacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_aportacion_dto_1.CreateAportacionDto]),
    __metadata("design:returntype", void 0)
], AportacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_aportacion_dto_1.SearchAportacion]),
    __metadata("design:returntype", void 0)
], AportacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AportacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_aportacion_dto_1.UpdateAportacionDto]),
    __metadata("design:returntype", void 0)
], AportacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AportacionController.prototype, "remove", null);
exports.AportacionController = AportacionController = __decorate([
    (0, swagger_1.ApiTags)('Aportaciones'),
    (0, common_1.Controller)('aportacion'),
    (0, decorators_1.Auth)(interfaces_1.ValidRoles.admin, interfaces_1.ValidRoles.superUser, interfaces_1.ValidRoles.user),
    __metadata("design:paramtypes", [aportacion_service_1.AportacionService])
], AportacionController);
//# sourceMappingURL=aportacion.controller.js.map