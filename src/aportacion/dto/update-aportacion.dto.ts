import { PartialType } from '@nestjs/swagger';
import { CreateAportacionDto } from './create-aportacion.dto';

export class UpdateAportacionDto extends PartialType(CreateAportacionDto) {}
