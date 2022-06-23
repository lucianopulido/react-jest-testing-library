import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un string y un numero', () => {

        const [letras,numeros] = retornaArreglo()
        expect(letras).toBe('ABC')
        expect(numeros).toBe(123)
    })
})