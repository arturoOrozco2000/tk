import { PartialType } from '@nestjs/swagger';
import { CreateDomicilioDto } from './create-domicilio.dto';

export class UpdateDomicilioDto extends PartialType(CreateDomicilioDto) {}
