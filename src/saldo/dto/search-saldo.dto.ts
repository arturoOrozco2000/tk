import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchSaldo {
  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  idUsuario?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  @IsOptional()
  monto?: number;
}