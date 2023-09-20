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
exports.RetirosController = void 0;
const common_1 = require("@nestjs/common");
const retiros_service_1 = require("./retiros.service");
const create_retiro_dto_1 = require("./dto/create-retiro.dto");
const update_retiro_dto_1 = require("./dto/update-retiro.dto");
const search_retiro_dto_1 = require("./dto/search-retiro.dto");
let RetirosController = class RetirosController {
    constructor(retirosService) {
        this.retirosService = retirosService;
    }
    create(createRetiroDto) {
        return this.retirosService.create(createRetiroDto);
    }
    findAll(searchRetiro) {
        return this.retirosService.findAll(searchRetiro);
    }
    findOne(term) {
        return this.retirosService.findOne(term);
    }
    update(id, updateRetiroDto) {
        return this.retirosService.update(+id, updateRetiroDto);
    }
    remove(id) {
        return this.retirosService.remove(+id);
    }
};
exports.RetirosController = RetirosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_retiro_dto_1.CreateRetiroDto]),
    __metadata("design:returntype", void 0)
], RetirosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_retiro_dto_1.SearchRetiro]),
    __metadata("design:returntype", void 0)
], RetirosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':term'),
    __param(0, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RetirosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_retiro_dto_1.UpdateRetiroDto]),
    __metadata("design:returntype", void 0)
], RetirosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RetirosController.prototype, "remove", null);
exports.RetirosController = RetirosController = __decorate([
    (0, common_1.Controller)('retiros'),
    __metadata("design:paramtypes", [retiros_service_1.RetirosService])
], RetirosController);
//# sourceMappingURL=retiros.controller.js.map