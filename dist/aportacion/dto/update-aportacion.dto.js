"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAportacionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_aportacion_dto_1 = require("./create-aportacion.dto");
class UpdateAportacionDto extends (0, swagger_1.PartialType)(create_aportacion_dto_1.CreateAportacionDto) {
}
exports.UpdateAportacionDto = UpdateAportacionDto;
//# sourceMappingURL=update-aportacion.dto.js.map