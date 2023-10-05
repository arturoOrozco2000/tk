"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsuario = void 0;
const common_1 = require("@nestjs/common");
exports.GetUsuario = (0, common_1.createParamDecorator)((data, ctx) => {
    const resp = ctx.switchToHttp().getRequest();
    const usuario = resp.user;
    if (!usuario)
        throw new common_1.InternalServerErrorException('User not found (request)');
    return (!data)
        ? usuario
        : usuario[data];
});
//# sourceMappingURL=get-usuario.decorator.js.map