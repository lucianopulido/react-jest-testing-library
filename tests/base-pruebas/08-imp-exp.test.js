import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {

        const id = 1
        const hero = getHeroeById(id)
        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})

    })

    test('getHeroeById debe undefined si un heroe no existe', () => {

        const id = 100
        const hero = getHeroeById(id)
        expect(hero).toEqual(undefined)

    })

    test('getHeroeByOwner debe retornar  heroes de DC', () => {

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
})