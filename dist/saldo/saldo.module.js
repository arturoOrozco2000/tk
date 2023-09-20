"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoModule = void 0;
const common_1 = require("@nestjs/common");
const saldo_service_1 = require("./saldo.service");
const saldo_controller_1 = require("./saldo.controller");
const general_module_1 = require("../general/general.module");
const mongoose_1 = require("@nestjs/mongoose");
const saldo_entity_1 = require("./entities/saldo.entity");
let SaldoModule = class SaldoModule {
};
exports.SaldoModule = SaldoModule;
exports.SaldoModule = SaldoModule = __decorate([
    (0, common_1.Module)({
        controllers: [saldo_controller_1.SaldoController],
        providers: [saldo_service_1.SaldoService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: saldo_entity_1.Saldo.name,
                    schema: saldo_entity_1.SaldoSchema,
                },
            ]),
            general_module_1.GeneralModule
        ]
    })
], SaldoModule);
//# sourceMappingURL=saldo.module.js.map