import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()
        expect(user).toEqual(testUser)
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = 'Luciano'
        const user = getUsuarioActivo(nombre)

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})