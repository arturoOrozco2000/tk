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
exports.DomicilioService = void 0;
const common_1 = require("@nestjs/common");
const general_service_1 = require("../general/general.service");
const mongoose_1 = require("@nestjs/mongoose");
const domicilio_entity_1 = require("./entities/domicilio.entity");
const mongoose_2 = require("mongoose");
let DomicilioService = class DomicilioService {
    constructor(generalService, domicilioModel) {
        this.generalService = generalService;
        this.domicilioModel = domicilioModel;
    }
    async create(createDomicilioDto) {
        try {
            const Content = await this.domicilioModel.create(createDomicilioDto);
            return Content;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async findAll(searchDomicilio) {
        try {
            const { colonia = '', calle = '', pais = '', ciudad = '', celular = '' } = searchDomicilio;
            const Content = await this.domicilioModel.find({ $and: [
                    { colonia: { $regex: `${colonia}`, $options: 'i' } },
                    { calle: { $regex: `${calle}`, $options: 'i' } },
                    { pais: { $regex: `${pais}`, $options: 'i' } },
                    { ciudad: { $regex: `${ciudad}`, $options: 'i' } },
                    { celular: { $regex: `${celular}`, $options: 'i' } },
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
            let domicilio;
            if (!domicilio && (0, mongoose_2.isValidObjectId)(term))
                domicilio = await this.domicilioModel.findById(term);
            if (!domicilio)
                throw new common_1.BadRequestException("No se encontro ninguna subscripcion con los parametros");
            return domicilio;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    update(id, updateDomicilioDto) {
        return `This action updates a #${id} domicilio`;
    }
    remove(id) {
        return `This action removes a #${id} domicilio`;
    }
};
exports.DomicilioService = DomicilioService;
exports.DomicilioService = DomicilioService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(domicilio_entity_1.Domicilio.name)),
    __metadata("design:paramtypes", [general_service_1.GeneralService,
        mongoose_2.Model])
], DomicilioService);
//# sourceMappingURL=domicilio.service.js.map