"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralService = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let GeneralService = class GeneralService {
    errorHandler(error) {
        if (error.code === 11000)
            throw new common_1.BadRequestException(`Usuario duplicado ${JSON.stringify(error.keyValue)}`);
        if (error.status === 400)
            throw new common_1.BadRequestException(error.response.message);
        console.log(error);
        throw new common_1.InternalServerErrorException('Error interno del servidor');
    }
    ;
    async fetchHandler(body, headers, method, url) {
        const rest = await (0, node_fetch_1.default)(url, { method, headers, body });
        return await rest.json();
    }
};
exports.GeneralService = GeneralService;
exports.GeneralService = GeneralService = __decorate([
    (0, common_1.Injectable)()
], GeneralService);
//# sourceMappingURL=general.service.js.map