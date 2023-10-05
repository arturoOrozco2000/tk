"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetirosModule = void 0;
const common_1 = require("@nestjs/common");
const retiros_service_1 = require("./retiros.service");
const retiros_controller_1 = require("./retiros.controller");
const mongoose_1 = require("@nestjs/mongoose");
const general_module_1 = require("../general/general.module");
const retiro_entity_1 = require("./entities/retiro.entity");
const auth_module_1 = require("../auth/auth.module");
let RetirosModule = class RetirosModule {
};
exports.RetirosModule = RetirosModule;
exports.RetirosModule = RetirosModule = __decorate([
    (0, common_1.Module)({
        controllers: [retiros_controller_1.RetirosController],
        providers: [retiros_service_1.RetirosService],
        imports: [
            auth_module_1.AuthModule,
            mongoose_1.MongooseModule.forFeature([
                {
                    name: retiro_entity_1.Retiro.name,
                    schema: retiro_entity_1.RetiroSchema,
                },
            ]),
            general_module_1.GeneralModule
        ]
    })
], RetirosModule);
//# sourceMappingURL=retiros.module.js.map