import { ExceptionFilter, Catch, ArgumentsHost, HttpException, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';
import { JuegosNotFoundException } from './juegos/juegos-not-found.exception';

@Catch(HttpException, NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Manejo de la excepción para rutas no encontradas
    if (exception instanceof NotFoundException && !(exception instanceof JuegosNotFoundException)) {
      response
        .status(404)
        .json({
          statusCode: 404,
          message: 'Ruta no encontrada',
          path: request.url,
        });
    } else {
      // Manejo de otras excepciones
      response
        .status(exception.getStatus())
        .json({
          statusCode: exception.getStatus(),
          message: exception.message,
        });
    }
  }
}