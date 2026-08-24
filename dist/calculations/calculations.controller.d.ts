import { CalculationsService } from './calculations.service';
import { CreateCalculationDto } from './dto/create-calculation.dto';
export declare class CalculationsController {
    private readonly calculationsService;
    constructor(calculationsService: CalculationsService);
    create(createCalculationDto: CreateCalculationDto): Promise<{
        id: string;
        expression: string;
        result: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        expression: string;
        result: string;
        createdAt: Date;
    }[]>;
}
