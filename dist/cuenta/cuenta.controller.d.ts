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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CuentaService } from './cuenta.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { SearchCuenta } from './dto/search-cuenta.dto';
export declare class CuentaController {
    private readonly cuentaService;
    constructor(cuentaService: CuentaService);
    create(createCuentaDto: CreateCuentaDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/cuenta.entity").Cuenta> & import("./entities/cuenta.entity").Cuenta & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(searchCuenta: SearchCuenta): Promise<(import("mongoose").Document<unknown, {}, import("./entities/cuenta.entity").Cuenta> & import("./entities/cuenta.entity").Cuenta & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<import("./entities/cuenta.entity").Cuenta>;
    update(id: string, updateCuentaDto: UpdateCuentaDto): string;
    remove(id: string): string;
}
