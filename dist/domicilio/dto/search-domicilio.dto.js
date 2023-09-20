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
exports.SearchDomicilio = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SearchDomicilio {
}
exports.SearchDomicilio = SearchDomicilio;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchDomicilio.prototype, "colonia", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchDomicilio.prototype, "calle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchDomicilio.prototype, "noExterior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchDomicilio.prototype, "noInterior", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchDomicilio.prototype, "pais", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchDomicilio.prototype, "ciudad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], SearchDomicilio.prototype, "cp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "",
        example: "",
        required: true
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchDomicilio.prototype, "celular", void 0);
//# sourceMappingURL=search-domicilio.dto.js.map