
import { IsInt,IsString, Max, Min } from "class-validator";

export class gameDTO  { 

    @IsString()
    titulo: string;
    @IsString()
    plataforma: string;
    @IsString()
    generos: string[];
    @IsInt()
    @Min(2000)
    anioLanzamiento: number;
    @IsInt()
    @Min(0)
    @Max(10)
    calificacion: number;
    @IsString()
    desarrolladora: string;
    @IsInt()
    @Min(0)
    precio: number;


}