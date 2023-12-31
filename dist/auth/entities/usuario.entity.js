"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = exports.Usuario = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario extends mongoose_2.Document {
    checkFieldsBeforeInsert() {
        this.correo = this.correo.toLowerCase().trim();
    }
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();
    }
};
exports.Usuario = Usuario;
__decorate([
    (0, mongoose_1.Prop)({ index: true }),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Usuario.prototype, "apellidoP", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Usuario.prototype, "apellidoM", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Usuario.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true, default: ['user'] }),
    __metadata("design:type", Array)
], Usuario.prototype, "roles", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true, default: true }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Usuario.prototype, "checkFieldsBeforeInsert", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Usuario.prototype, "checkFieldsBeforeUpdate", null);
exports.Usuario = Usuario = __decorate([
    (0, mongoose_1.Schema)()
], Usuario);
exports.UsuarioSchema = mongoose_1.SchemaFactory.createForClass(Usuario);
//# sourceMappingURL=usuario.entity.js.map