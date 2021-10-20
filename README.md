# TDD and Pair Programming
TDD y Pair Programming


![Gráfico TDD rojo verde refactoreo](/docs/tdd-red-green-refactor.jpg)

### Requerimientos Proyecto fizzbuzzy
![Gráfico Requerimientos fizzbuzz](/docs/requirements-exercise.jpg)

## Inicialización y configuración:
### Instalar y configurar proyecto
```sh
npm init
npm install --save-dev jest
npm install
```

Agregar la siguiente sección a  package.json:

```json
{
  "scripts": {
    "test": "jest  --watchAll"
  }
}
```
Escribir mínimo una prueba
```js
describe('Interface fizzbuzzy', () => {
    test('Should be a function: ', () => {

    });
})
```
### Correr test
```sh
npm run test
```
