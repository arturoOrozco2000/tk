import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateRetiroDto {
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
  moneda: string;

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
  fechaRetiro: Date;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  cuenta: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsString()
  concepto: string;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsBoolean()
  status: boolean;
}
