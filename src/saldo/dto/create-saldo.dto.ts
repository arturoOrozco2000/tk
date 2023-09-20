import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateSaldoDto {
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
  @IsNumber()
  monto: number;

  @ApiProperty({
    description: "",
    example: "",
    required: true
  })
  @IsBoolean()
  status: boolean;
}
