

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Fibonacci REST API

Este proyecto presenta una API REST (o similar) que devuelve el valor correspondiente en la secuencia de Fibonacci para un índice dado `n`. Por ejemplo, si se da el índice `n=3`, se devuelve un valor de "2", y si se pide `n=6`, se devuelve "8".

## Descripción

La API calcula y devuelve valores de la serie de Fibonacci basándose en el índice suministrado. El proyecto utiliza una función iterativa y otra recursiva para calcular estos valores. Además, se manejan casos de error, como índices negativos, y se proporciona una respuesta estructurada con estado, datos y mensaje.

## Cómo iniciar la aplicación

1. **Configuración Inicial**:
    - Clona el repositorio en tu máquina local.
    - Navega al directorio del proyecto.
    - Instala las dependencias con el comando: `npm install`.

2. **Ejecución**:
    - Inicia la aplicación con el comando: `npm start`.

3. **Acceso a la Documentación**:
    - Una vez que la aplicación esté en marcha, accede a la documentación interactiva proporcionada por Swagger en [http://localhost:3000/api/v1/docs#/](http://localhost:3000/api/v1/docs#/).

## Decisiones Técnicas

- **Funciones Iterativas y Recursivas**: Se implementaron dos versiones de la función para calcular el valor de Fibonacci: una versión iterativa y una versión recursiva. La versión iterativa es eficiente para índices más grandes, mientras que la versión recursiva proporciona una demostración clara de la naturaleza recursiva de la secuencia de Fibonacci.

- **Manejo de Errores**: Se han gestionado diversos casos de errores para garantizar respuestas adecuadas a las solicitudes inválidas.

- **Documentación con Swagger**: Se optó por utilizar Swagger para documentar la API debido a su capacidad para ofrecer una documentación interactiva y fácil de usar, lo que facilita la comprensión y prueba de la API.

## Optimizaciones Futuras

- **Ampliación de la API**: Podríamos extender la API para incluir más operaciones relacionadas con secuencias matemáticas o funciones relacionadas con Fibonacci.

## Conclusión

El proyecto Fibonacci REST API es una solución inicial para calcular y obtener valores de la serie de Fibonacci. Con una base sólida, esta API está lista para futuras optimizaciones y expansiones, dependiendo de las necesidades del usuario.

---

¡Gracias por revisar este proyecto! Espero tus comentarios y sugerencias.


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
