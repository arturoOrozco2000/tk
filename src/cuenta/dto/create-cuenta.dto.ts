import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateCuentaDto {
  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  idUsuario: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  nombre: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  apellidoP: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  apellidoM: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  noCuenta: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  Banco: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsBoolean()
  status: boolean;
}
