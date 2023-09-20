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
exports.CreateDomicilioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDomicilioDto {
}
exports.CreateDomicilioDto = CreateDomicilioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDomicilioDto.prototype, "idUsuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDomicilioDto.prototype, "colonia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDomicilioDto.prototype, "calle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDomicilioDto.prototype, "noExterior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDomicilioDto.prototype, "noInterior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDomicilioDto.prototype, "pais", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDomicilioDto.prototype, "ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDomicilioDto.prototype, "cp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDomicilioDto.prototype, "celular", void 0);
//# sourceMappingURL=create-domicilio.dto.js.map