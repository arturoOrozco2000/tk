import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchRetiro {
  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  moneda?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  @IsOptional()
  monto?: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  cuenta?: string;
}