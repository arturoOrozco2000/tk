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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const usuario_entity_1 = require("./entities/usuario.entity");
const decorators_1 = require("./decorators");
const user_role_guard_1 = require("./guards/user-role.guard");
const interfaces_1 = require("./interfaces");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    createUsuario(createUsuarioDto) {
        return this.authService.create(createUsuarioDto);
    }
    loginUsuario(loginUsuarioDto) {
        return this.authService.login(loginUsuarioDto);
    }
    checkAuthStatus(usuario) {
        return this.authService.checkAuthStatus(usuario);
    }
    testingPrivateRoute(request, usuario, correoUsuario, rawHeaders, headers) {
        return {
            ok: true,
            message: 'Hola Mundo Private',
            usuario,
            correoUsuario,
            rawHeaders,
            headers
        };
    }
    privateRoute2(usuario) {
        return {
            ok: true,
            usuario
        };
    }
    privateRoute3(usuario) {
        return {
            ok: true,
            usuario
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('registro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUsuarioDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createUsuario", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginUsuarioDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginUsuario", null);
__decorate([
    (0, common_1.Get)('check-status'),
    (0, decorators_1.Auth)(),
    __param(0, (0, decorators_1.GetUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "checkAuthStatus", null);
__decorate([
    (0, common_1.Get)('private'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, decorators_1.GetUsuario)()),
    __param(2, (0, decorators_1.GetUsuario)('correo')),
    __param(3, (0, decorators_1.RawHeaders)()),
    __param(4, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, usuario_entity_1.Usuario, String, Array, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "testingPrivateRoute", null);
__decorate([
    (0, common_1.Get)('private2'),
    (0, decorators_1.RoleProtected)(interfaces_1.ValidRoles.superUser, interfaces_1.ValidRoles.admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), user_role_guard_1.UserRoleGuard),
    __param(0, (0, decorators_1.GetUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "privateRoute2", null);
__decorate([
    (0, common_1.Get)('private3'),
    (0, decorators_1.Auth)(interfaces_1.ValidRoles.admin, interfaces_1.ValidRoles.superUser, interfaces_1.ValidRoles.user),
    __param(0, (0, decorators_1.GetUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "privateRoute3", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map