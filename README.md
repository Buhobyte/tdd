# TDD and Pair Programming
TDD y Pair Programming


![Gráfico TDD rojo verde refactoreo](/docs/tdd-red-green-refactor.png)

### Requerimientos Proyecto fizzbuzzy
![Gráfico TDD rojo verde refactoreo](/docs/requirements-exercise.png)

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
