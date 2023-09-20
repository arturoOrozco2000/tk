import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateAportacionDto {
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
  noCuenta: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  monto: number;

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
