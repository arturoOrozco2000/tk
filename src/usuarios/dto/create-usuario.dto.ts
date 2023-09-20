import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsString } from "class-validator";

export class CreateUsuarioDto {
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
  correo: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  contraseña: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsDate()
  fechaN: Date;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  nacionalidad: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  ocupacion: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  rol: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsDate()
  fecha: Date;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsBoolean()
  status: boolean;
}
