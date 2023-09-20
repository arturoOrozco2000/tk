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
exports.NivelService = void 0;
const common_1 = require("@nestjs/common");
const general_service_1 = require("../general/general.service");
const mongoose_1 = require("@nestjs/mongoose");
const nivel_entity_1 = require("./entities/nivel.entity");
const mongoose_2 = require("mongoose");
let NivelService = class NivelService {
    constructor(generalService, nivelModel) {
        this.generalService = generalService;
        this.nivelModel = nivelModel;
    }
    async create(createNivelDto) {
        try {
            const Content = await this.nivelModel.create(createNivelDto);
            return Content;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async findAll(searchNivel) {
        try {
            const { idUsuario = '', nombreN = '', interesM = '', interesA = '', montoF = '' } = searchNivel;
            const Content = await this.nivelModel.find({ $and: [
                    { idUsuario: { $regex: `${idUsuario}`, $options: 'i' } },
                    { nombreN: { $regex: `${nombreN}`, $options: 'i' } },
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
            let nivel;
            if (!nivel && (0, mongoose_2.isValidObjectId)(term))
                nivel = await this.nivelModel.findById(term);
            if (!nivel)
                throw new common_1.BadRequestException("No se encontro ninguna subscripcion con los parametros");
            return nivel;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    update(id, updateNivelDto) {
        return `This action updates a #${id} nivel`;
    }
    remove(id) {
        return `This action removes a #${id} nivel`;
    }
};
exports.NivelService = NivelService;
exports.NivelService = NivelService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(nivel_entity_1.Nivel.name)),
    __metadata("design:paramtypes", [general_service_1.GeneralService,
        mongoose_2.Model])
], NivelService);
//# sourceMappingURL=nivel.service.js.map