import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateNivelDto {
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
  nombreN: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  interesM: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  interesA: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsNumber()
  montoF: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsBoolean()
  status: boolean;
}
