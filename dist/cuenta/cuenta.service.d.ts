/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { GeneralService } from 'src/general/general.service';
import { Model } from 'mongoose';
import { Cuenta } from './entities/cuenta.entity';
import { SearchCuenta } from './dto/search-cuenta.dto';
export declare class CuentaService {
    private readonly generalService;
    private readonly cuentaModel;
    constructor(generalService: GeneralService, cuentaModel: Model<Cuenta>);
    create(createCuentaDto: CreateCuentaDto): Promise<import("mongoose").Document<unknown, {}, Cuenta> & Cuenta & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchCuenta: SearchCuenta): Promise<(import("mongoose").Document<unknown, {}, Cuenta> & Cuenta & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Cuenta>;
    update(id: number, updateCuentaDto: UpdateCuentaDto): string;
    remove(id: number): string;
}
