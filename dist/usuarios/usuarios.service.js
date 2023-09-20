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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const usuario_entity_1 = require("./entities/usuario.entity");
const mongoose_2 = require("mongoose");
const general_service_1 = require("../general/general.service");
let UsuariosService = class UsuariosService {
    constructor(generalService, usuarioModel) {
        this.generalService = generalService;
        this.usuarioModel = usuarioModel;
    }
    async create(createUsuarioDto) {
        try {
            const Content = await this.usuarioModel.create(createUsuarioDto);
            return Content;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async findAll(searchUsuario) {
        try {
            const { nombre = '', apellidoP = '', apellidoM = '', } = searchUsuario;
            const Content = await this.usuarioModel.find({ $and: [
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
            let usuario;
            if (!usuario && (0, mongoose_2.isValidObjectId)(term))
                usuario = await this.usuarioModel.findById(term);
            if (!usuario)
                throw new common_1.BadRequestException("No se encontro ninguna subscripcion con los parametros");
            return usuario;
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async update(term, updateUsuarioDto) {
        const usuario = await this.findOne(term);
        await usuario.updateOne(updateUsuarioDto);
        return { ...usuario.toJSON, ...updateUsuarioDto };
    }
    async remove(id) {
        const { deletedCount } = await this.usuarioModel.deleteOne({ _id: id });
        if (deletedCount === 0)
            throw new common_1.BadRequestException(`Usuario con id: "${id}" no encontrado`);
        return;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(usuario_entity_1.Usuario.name)),
    __metadata("design:paramtypes", [general_service_1.GeneralService,
        mongoose_2.Model])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map