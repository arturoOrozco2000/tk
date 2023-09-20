import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class SearchUsuario {
  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  apellidoP?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  apellidoM?: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  @IsOptional()
  correo?: string;
}