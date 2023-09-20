import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import fetch, { Headers } from 'node-fetch';

@Injectable()
export class GeneralService {

  // Manejador de errores
  errorHandler(error: any) {
    if(error.code === 11000) // Error de duplicacion de parametro
      throw new BadRequestException(`Usuario duplicado ${JSON.stringify(error.keyValue)}`)
    if(error.status === 400) // Error de duplicacion de parametro
      throw new BadRequestException(error.response.message)
    console.log(error);
    throw new InternalServerErrorException('Error interno del servidor')
  };
  
  // Fetch 
  async fetchHandler(body: any, headers: any, method: string, url: string) {
    const rest = await fetch(url, {method, headers, body});
    return await rest.json();
  }


}
