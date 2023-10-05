import { createParamDecorator, ExecutionContext, InternalServerErrorException } from '@nestjs/common';



export const GetUsuario = createParamDecorator(
    ( data: string, ctx: ExecutionContext ) => {

        const resp = ctx.switchToHttp().getRequest();
        const usuario = resp.user;

        if ( !usuario )
            throw new InternalServerErrorException('User not found (request)');
        
        return ( !data ) 
            ? usuario 
            : usuario[data];
        
    }
);