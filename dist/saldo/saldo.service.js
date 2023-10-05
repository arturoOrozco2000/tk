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
exports.SaldoService = void 0;
const common_1 = require("@nestjs/common");
const general_service_1 = require("../general/general.service");
const mongoose_1 = require("@nestjs/mongoose");
const saldo_entity_1 = require("./entities/saldo.entity");
const mongoose_2 = require("mongoose");
let SaldoService = class SaldoService {
    constructor(generalService, saldoModel) {
        this.generalService = generalService;
        this.saldoModel = saldoModel;
    }
    async create(createSaldoDto) {
        try {
            const Content = await this.saldoModel.create(createSaldoDto);
            return Content;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async findAll(searchSaldo) {
        const { idUsuario = '', monto = '' } = searchSaldo;
        try {
            const Content = await this.saldoModel.find({ $and: [
                    { idUsuario: { $regex: `${idUsuario}`, $options: 'i' } },
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
            let saldo;
            if (!saldo && (0, mongoose_2.isValidObjectId)(term))
                saldo = await this.saldoModel.findById(term);
            if (!saldo)
                throw new common_1.BadRequestException("No se encontro ninguna subscripcion con los parametros");
            return saldo;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async update(term, updateSaldoDto) {
        const saldo = await this.findOne(term);
        await saldo.updateOne(updateSaldoDto);
        return { ...saldo.toJSON, ...updateSaldoDto };
    }
    remove(id) {
        return `This action removes a #${id} saldo`;
    }
};
exports.SaldoService = SaldoService;
exports.SaldoService = SaldoService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(saldo_entity_1.Saldo.name)),
    __metadata("design:paramtypes", [general_service_1.GeneralService,
        mongoose_2.Model])
], SaldoService);
//# sourceMappingURL=saldo.service.js.map