"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AportacionModule = void 0;
const common_1 = require("@nestjs/common");
const aportacion_service_1 = require("./aportacion.service");
const aportacion_controller_1 = require("./aportacion.controller");
const mongoose_1 = require("@nestjs/mongoose");
const aportacion_entity_1 = require("./entities/aportacion.entity");
const general_module_1 = require("../general/general.module");
const auth_module_1 = require("../auth/auth.module");
let AportacionModule = class AportacionModule {
};
exports.AportacionModule = AportacionModule;
exports.AportacionModule = AportacionModule = __decorate([
    (0, common_1.Module)({
        controllers: [aportacion_controller_1.AportacionController],
        providers: [aportacion_service_1.AportacionService],
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: aportacion_entity_1.Aportacion.name,
                    schema: aportacion_entity_1.AportacionSchema,
                },
            ]),
            general_module_1.GeneralModule
        ]
    })
], AportacionModule);
//# sourceMappingURL=aportacion.module.js.map