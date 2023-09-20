import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class SearchNivel {
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
  @IsString()
  @IsOptional()
  nombreN?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  @IsOptional()
  interesM?: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  @IsOptional()
  interesA?: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  @IsOptional()
  montoF?: number;
}
