"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSaldoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_saldo_dto_1 = require("./create-saldo.dto");
class UpdateSaldoDto extends (0, swagger_1.PartialType)(create_saldo_dto_1.CreateSaldoDto) {
}
exports.UpdateSaldoDto = UpdateSaldoDto;
//# sourceMappingURL=update-saldo.dto.js.map