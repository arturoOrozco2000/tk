"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomicilioModule = void 0;
const common_1 = require("@nestjs/common");
const domicilio_service_1 = require("./domicilio.service");
const domicilio_controller_1 = require("./domicilio.controller");
const mongoose_1 = require("@nestjs/mongoose");
const general_module_1 = require("../general/general.module");
const domicilio_entity_1 = require("./entities/domicilio.entity");
const auth_module_1 = require("../auth/auth.module");
let DomicilioModule = class DomicilioModule {
};
exports.DomicilioModule = DomicilioModule;
exports.DomicilioModule = DomicilioModule = __decorate([
    (0, common_1.Module)({
        controllers: [domicilio_controller_1.DomicilioController],
        providers: [domicilio_service_1.DomicilioService],
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: domicilio_entity_1.Domicilio.name,
                    schema: domicilio_entity_1.DomicilioSchema,
                },
            ]),
            general_module_1.GeneralModule
        ]
    })
], DomicilioModule);
//# sourceMappingURL=domicilio.module.js.map