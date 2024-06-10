
import { IsArray, IsInt,IsNumber,IsString, Max, Min,ArrayMinSize, IsOptional } from "class-validator";

export class gameDTO  { 

    @IsOptional()
    @IsString()
    titulo: string;
    @IsOptional()
    @IsString()
    plataforma: string;
    @IsOptional()
    @IsArray()
    @ArrayMinSize(1, { message: 'El arreglo debe tener al menos un elemento' })
    @IsString({ each: true, message: 'Cada elemento del arreglo debe ser una cadena' })
    generos: string[];
    @IsOptional()
    @IsInt()
    @Min(2000)
    anioLanzamiento: number;
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(10)
    calificacion: number;
    @IsOptional()
    @IsString()
    desarrolladora: string;
    @IsOptional()
    @IsNumber()
    @Min(0)
    precio: number;

}