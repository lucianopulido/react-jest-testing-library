import {getSaludo} from "../../src/base-pruebas/02-template-string";

describe('02-template-string', () => {
    test('getSaludo debe retornar Hola Luciano', () => {
        const name = 'Luciano'
        const message = getSaludo(name)
        expect(message).toBe(`Hola ${name}`)
    })
})


