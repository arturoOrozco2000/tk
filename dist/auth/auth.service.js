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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const usuario_entity_1 = require("./entities/usuario.entity");
const general_service_1 = require("../general/general.service");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AuthService = class AuthService {
    constructor(generalService, usuarioModel, jwtService) {
        this.generalService = generalService;
        this.usuarioModel = usuarioModel;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        try {
            const { contraseña, ...userData } = createUserDto;
            const usuario = await this.usuarioModel.create({
                ...userData,
                contraseña: bcrypt.hashSync(contraseña, 10)
            });
            delete (await usuario).contraseña;
            return {
                usuario,
                token: this.getJwtToken({ id: usuario.id, correo: usuario.correo, nombre: usuario.nombre, apellidoP: usuario.apellidoP })
            };
        }
        catch (error) {
            this.generalService.errorHandler(error);
        }
    }
    async login(loginUsuarioDto) {
        const { contraseña, correo } = loginUsuarioDto;
        const usuario = await this.usuarioModel.findOne({ correo });
        if (!usuario)
            throw new common_1.UnauthorizedException('Credentials are not valid (email)');
        if (!bcrypt.compareSync(contraseña, usuario.contraseña))
            throw new common_1.UnauthorizedException('Credentials are not valid (password)');
        const { nombre, apellidoP, apellidoM, roles, status } = usuario;
        return {
            nombre,
            apellidoP,
            apellidoM,
            roles,
            status,
            token: this.getJwtToken({ id: usuario.id, correo: usuario.correo, nombre: usuario.nombre, apellidoP: usuario.apellidoP })
        };
    }
    async checkAuthStatus(usuario) {
        const { nombre, apellidoP, apellidoM, roles, status } = usuario;
        return {
            nombre,
            apellidoP,
            apellidoM,
            roles,
            status,
            token: this.getJwtToken({ id: usuario.apellidoM, correo: usuario.correo, nombre: usuario.nombre, apellidoP: usuario.apellidoP })
        };
    }
    getJwtToken(payload) {
        const token = this.jwtService.sign(payload);
        return token;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(usuario_entity_1.Usuario.name)),
    __metadata("design:paramtypes", [general_service_1.GeneralService,
        mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map