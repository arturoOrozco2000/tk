"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRetiroDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_retiro_dto_1 = require("./create-retiro.dto");
class UpdateRetiroDto extends (0, swagger_1.PartialType)(create_retiro_dto_1.CreateRetiroDto) {
}
exports.UpdateRetiroDto = UpdateRetiroDto;
//# sourceMappingURL=update-retiro.dto.js.map