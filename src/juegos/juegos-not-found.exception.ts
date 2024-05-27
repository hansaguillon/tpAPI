import { NotFoundException } from '@nestjs/common';

export class JuegosNotFoundException extends NotFoundException {
  constructor(message: string) {
    super(message);
  }
}