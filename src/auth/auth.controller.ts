import { Controller, Get, Post, Body, UseGuards, Req, Headers, SetMetadata } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IncomingHttpHeaders } from 'http';

import { AuthService } from './auth.service';

import { LoginUsuarioDto, CreateUsuarioDto } from './dto';
import { Usuario } from './entities/usuario.entity';
import { Auth, GetUsuario, RawHeaders, RoleProtected } from './decorators';
import { UserRoleGuard } from './guards/user-role.guard';
import { ValidRoles } from './interfaces';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}



  @Post('registro')
  createUsuario(@Body() createUsuarioDto: CreateUsuarioDto ) {
    return this.authService.create( createUsuarioDto );
  }

  @Post('login')
  loginUsuario(@Body() loginUsuarioDto: LoginUsuarioDto ) {
    return this.authService.login( loginUsuarioDto );
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(
    @GetUsuario() usuario: Usuario
  ) {
    return this.authService.checkAuthStatus( usuario );
  }

  @Get('private')
  @UseGuards( AuthGuard() )
  testingPrivateRoute(
    @Req() request: Express.Request,
    @GetUsuario() usuario: Usuario,
    @GetUsuario('correo') correoUsuario: string,
    
    @RawHeaders() rawHeaders: string[],
    @Headers() headers: IncomingHttpHeaders,
  ) {
    return {
      ok: true,
      message: 'Hola Mundo Private',
      usuario,
      correoUsuario,
      rawHeaders,
      headers
    }
  }

  @Get('private2')
  @RoleProtected( ValidRoles.superUser, ValidRoles.admin)
  @UseGuards( AuthGuard(), UserRoleGuard )
  privateRoute2(
    @GetUsuario() usuario: Usuario
  ) {

    return {
      ok: true,
      usuario
    }
  }


  @Get('private3')
  @Auth( ValidRoles.admin, ValidRoles.superUser, ValidRoles.user )
  privateRoute3(
    @GetUsuario() usuario: Usuario
  ) {

    return {
      ok: true,
      usuario
    }
  }



}
