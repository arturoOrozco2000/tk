import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

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

    @IsString()
    @IsEmail()
    @Transform(({ value }) => value.toLowerCase().trim())
    correo: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    contraseña: string;

    @ApiProperty({
      description: "",
      example: "",
      required: true
    })
    @IsBoolean()
    status: boolean;
}