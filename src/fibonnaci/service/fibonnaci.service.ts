import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonnaciService {
  getFibonacci(n: number): { status: string; data?: any; message: string } {
    if (n < 0) {
      throw new Error('El índice "n" no debe ser negativo.');
    }

    let a = 0;
    let b = 1;

    if (n === 0)
      return {
        status: 'success',
        data: a,
        message: 'Operación completada con éxito.',
      };
    a;
    if (n === 1)
      return {
        status: 'success',
        data: b,
        message: 'Operación completada con éxito.',
      };

    for (let i = 2; i <= n; i++) {
      const nextFib = a + b;
      a = b;
      b = nextFib;
    }

    return {
      status: 'success',
      data: b,
      message: 'Operación completada con éxito.',
    };
  }

  getFibonacciRecursivo(n: number): {
    status: string;
    data?: any;
    message: string;
  } {
    if (n < 0) {
      throw new Error('El índice "n" no debe ser negativo.');
    }

    const computeFib = (index: number): number => {
      if (index <= 1) {
        return index;
      }
      return computeFib(index - 1) + computeFib(index - 2);
    };

    return {
      status: 'success',
      data: computeFib(n),
      message: 'Operación completada con éxito.',
    };
  }
}
