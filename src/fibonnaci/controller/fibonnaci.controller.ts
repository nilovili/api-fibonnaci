import { Controller, Get, Param, Res } from '@nestjs/common';
import { FibonnaciService } from '../service/fibonnaci.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Fibonnaci')
@Controller('api/v1/fibonnaci')
export class FibonnaciController {
  constructor(private readonly fibonacciService: FibonnaciService) {}

  @Get(':n')
  @ApiOperation({
    description: 'Procesar una serie fibonacci hasta el índice "n".',
  })
  @ApiParam({
    name: 'n',
    type: String,
    description: 'Índice en la serie de Fibonacci.',
  })
  @ApiResponse({
    status: 200,
    description:
      'La serie de Fibonacci hasta el índice especificado, con una explicación paso a paso.',
  })
  @ApiResponse({
    status: 400,
    description:
      'Solicitud incorrecta, usualmente debido a un índice inválido o fuera de rango.',
  })
  async getFib(@Param('n') n: string, @Res() res: Response) {
    // Cambia esto a string
    const numberN = parseInt(n, 10); // Convierte el string a número

    if (isNaN(numberN)) {
      // Si no es un número válido
      return res.status(400).json({
        status: 'error',
        message: 'El valor de n no es un número válido.',
      });
    }

    const response = this.fibonacciService.getFibonacci(numberN);

    if (response.status === 'error') {
      return res.status(400).json(response);
    } else {
      return res.status(200).json(response);
    }
  }

  @Get('recursivo/:n')
  @ApiOperation({
    description:
      'Procesar una serie fibonacci hasta el índice "n". de forma recursiva.',
  })
  @ApiParam({
    name: 'n',
    type: String,
    description: 'Índice en la serie de Fibonacci.',
  })
  @ApiResponse({
    status: 200,
    description:
      'La serie de Fibonacci hasta el índice especificado, con una explicación paso a paso.',
  })
  @ApiResponse({
    status: 400,
    description:
      'Solicitud incorrecta, usualmente debido a un índice inválido o fuera de rango.',
  })
  async getFibRecursivo(@Param('n') n: string, @Res() res: Response) {
    // Cambia esto a string
    const numberN = parseInt(n, 10); // Convierte el string a número

    if (isNaN(numberN)) {
      // Si no es un número válido
      return res.status(400).json({
        status: 'error',
        message: 'El valor de n no es un número válido.',
      });
    }

    const response = this.fibonacciService.getFibonacciRecursivo(numberN);

    if (response.status === 'error') {
      return res.status(400).json(response);
    } else {
      return res.status(200).json(response);
    }
  }
}
