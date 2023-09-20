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
exports.CuentaService = void 0;
const common_1 = require("@nestjs/common");
const general_service_1 = require("../general/general.service");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cuenta_entity_1 = require("./entities/cuenta.entity");
let CuentaService = class CuentaService {
    constructor(generalService, cuentaModel) {
        this.generalService = generalService;
        this.cuentaModel = cuentaModel;
    }
    async create(createCuentaDto) {
        try {
            const Content = await this.cuentaModel.create(createCuentaDto);
            return Content;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async findAll(searchCuenta) {
        try {
            const { nombre = '', apellidoP = '', apellidoM = '', } = searchCuenta;
            const Content = await this.cuentaModel.find({ $and: [
                    { nombre: { $regex: `${nombre}`, $options: 'i' } },
                    { apellidoP: { $regex: `${apellidoP}`, $options: 'i' } },
                    { apellidoM: { $regex: `${apellidoM}`, $options: 'i' } },
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
            let cuenta;
            if (!cuenta && (0, mongoose_2.isValidObjectId)(term))
                cuenta = await this.cuentaModel.findById(term);
            if (!cuenta)
                throw new common_1.BadRequestException("No se encontro ninguna subscripcion con los parametros");
            return cuenta;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    update(id, updateCuentaDto) {
        return `This action updates a #${id} cuenta`;
    }
    remove(id) {
        return `This action removes a #${id} cuenta`;
    }
};
exports.CuentaService = CuentaService;
exports.CuentaService = CuentaService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(cuenta_entity_1.Cuenta.name)),
    __metadata("design:paramtypes", [general_service_1.GeneralService,
        mongoose_2.Model])
], CuentaService);
//# sourceMappingURL=cuenta.service.js.map