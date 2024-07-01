
import { IsArray, IsInt,IsNumber,IsString, Max, Min,ArrayMinSize, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class gameDTO  { 

    @IsString()
    titulo: string;
    @IsString()
    plataforma: string;
    @IsArray()
    @ArrayMinSize(1, { message: 'El arreglo debe tener al menos un elemento' })
    @IsString({ each: true, message: 'Cada elemento del arreglo debe ser una cadena' })
    generos: string[];
    @IsInt()
    @Min(2000)
    anioLanzamiento: number;
    @IsNumber()
    @Min(0)
    @Max(10)
    calificacion: number;
    @IsString()
    desarrolladora: string;
    @IsNumber()
    @Min(0)
    precio: number;

}

export class updateGamesDto extends PartialType(gameDTO){
    


}





