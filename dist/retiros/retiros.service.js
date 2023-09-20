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
exports.RetirosService = void 0;
const common_1 = require("@nestjs/common");
const general_service_1 = require("../general/general.service");
const mongoose_1 = require("@nestjs/mongoose");
const retiro_entity_1 = require("./entities/retiro.entity");
const mongoose_2 = require("mongoose");
let RetirosService = class RetirosService {
    constructor(generalService, retiroModel) {
        this.generalService = generalService;
        this.retiroModel = retiroModel;
    }
    async create(createRetiroDto) {
        try {
            const Content = await this.retiroModel.create(createRetiroDto);
            return Content;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async findAll(searchRetiro) {
        const { moneda = '', monto = '', cuenta = '', } = searchRetiro;
        try {
            const Content = await this.retiroModel.find({ $and: [
                    { moneda: { $regex: `${moneda}`, $options: 'i' } },
                    { cuenta: { $regex: `${cuenta}`, $options: 'i' } },
                ]
            });
            if (Content.length <= 0)
                throw new common_1.BadRequestException("Informacion no encontrada");
            return Content;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async findOne(term) {
        try {
            let retiro;
            if (!retiro && (0, mongoose_2.isValidObjectId)(term))
                retiro = await this.retiroModel.findById(term);
            if (!retiro)
                throw new common_1.BadRequestException("No se encontro ninguna subscripcion con los parametros");
            return retiro;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    update(id, updateRetiroDto) {
        return `This action updates a #${id} retiro`;
    }
    remove(id) {
        return `This action removes a #${id} retiro`;
    }
};
exports.RetirosService = RetirosService;
exports.RetirosService = RetirosService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(retiro_entity_1.Retiro.name)),
    __metadata("design:paramtypes", [general_service_1.GeneralService,
        mongoose_2.Model])
], RetirosService);
//# sourceMappingURL=retiros.service.js.map