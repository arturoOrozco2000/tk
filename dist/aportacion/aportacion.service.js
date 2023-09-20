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
exports.AportacionService = void 0;
const common_1 = require("@nestjs/common");
const general_service_1 = require("../general/general.service");
const mongoose_1 = require("@nestjs/mongoose");
const aportacion_entity_1 = require("./entities/aportacion.entity");
const mongoose_2 = require("mongoose");
let AportacionService = class AportacionService {
    constructor(generalService, aportacionModel) {
        this.generalService = generalService;
        this.aportacionModel = aportacionModel;
    }
    async create(createAportacionDto) {
        try {
            const Content = await this.aportacionModel.create(createAportacionDto);
            return Content;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async findAll(searchAportacion) {
        try {
            const { noCuenta = '', monto = '' } = searchAportacion;
            const Content = await this.aportacionModel.find({ $and: [
                    { noCuenta: { $regex: `${noCuenta}`, $options: 'i' } },
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
            let aportacion;
            if (!aportacion && (0, mongoose_2.isValidObjectId)(term))
                aportacion = await this.aportacionModel.findById(term);
            if (!aportacion)
                throw new common_1.BadRequestException("No se encontro ninguna subscripcion con los parametros");
            return aportacion;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    update(id, updateAportacionDto) {
        return `This action updates a #${id} aportacion`;
    }
    remove(id) {
        return `This action removes a #${id} aportacion`;
    }
};
exports.AportacionService = AportacionService;
exports.AportacionService = AportacionService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(aportacion_entity_1.Aportacion.name)),
    __metadata("design:paramtypes", [general_service_1.GeneralService,
        mongoose_2.Model])
], AportacionService);
//# sourceMappingURL=aportacion.service.js.map