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
exports.NivelController = void 0;
const common_1 = require("@nestjs/common");
const nivel_service_1 = require("./nivel.service");
const create_nivel_dto_1 = require("./dto/create-nivel.dto");
const update_nivel_dto_1 = require("./dto/update-nivel.dto");
const search_nivel_dto_1 = require("./dto/search-nivel.dto");
const decorators_1 = require("../auth/decorators");
const interfaces_1 = require("../auth/interfaces");
const swagger_1 = require("@nestjs/swagger");
let NivelController = class NivelController {
    constructor(nivelService) {
        this.nivelService = nivelService;
    }
    create(createNivelDto) {
        return this.nivelService.create(createNivelDto);
    }
    findAll(searchNivel) {
        return this.nivelService.findAll(searchNivel);
    }
    findOne(term) {
        return this.nivelService.findOne(term);
    }
    update(id, updateNivelDto) {
        return this.nivelService.update(+id, updateNivelDto);
    }
    remove(id) {
        return this.nivelService.remove(+id);
    }
};
exports.NivelController = NivelController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nivel_dto_1.CreateNivelDto]),
    __metadata("design:returntype", void 0)
], NivelController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_nivel_dto_1.SearchNivel]),
    __metadata("design:returntype", void 0)
], NivelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NivelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_nivel_dto_1.UpdateNivelDto]),
    __metadata("design:returntype", void 0)
], NivelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NivelController.prototype, "remove", null);
exports.NivelController = NivelController = __decorate([
    (0, swagger_1.ApiTags)('Nivel'),
    (0, common_1.Controller)('nivel'),
    (0, decorators_1.Auth)(interfaces_1.ValidRoles.admin, interfaces_1.ValidRoles.superUser, interfaces_1.ValidRoles.user),
    __metadata("design:paramtypes", [nivel_service_1.NivelService])
], NivelController);
//# sourceMappingURL=nivel.controller.js.map