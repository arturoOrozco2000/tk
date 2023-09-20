"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const dist_1 = require("@nestjs/mongoose/dist");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const cuenta_module_1 = require("./cuenta/cuenta.module");
const retiros_module_1 = require("./retiros/retiros.module");
const aportacion_module_1 = require("./aportacion/aportacion.module");
const nivel_module_1 = require("./nivel/nivel.module");
const saldo_module_1 = require("./saldo/saldo.module");
const domicilio_module_1 = require("./domicilio/domicilio.module");
const env_config_1 = require("./config/env.config");
const joi_validation_1 = require("./config/joi.validation");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [env_config_1.EnvConfiguration],
                validationSchema: joi_validation_1.JoiValidationSchema,
            }),
            dist_1.MongooseModule.forRoot(process.env.MONGODB),
            usuarios_module_1.UsuariosModule,
            cuenta_module_1.CuentaModule,
            retiros_module_1.RetirosModule,
            aportacion_module_1.AportacionModule,
            nivel_module_1.NivelModule,
            saldo_module_1.SaldoModule,
            domicilio_module_1.DomicilioModule,
        ],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map