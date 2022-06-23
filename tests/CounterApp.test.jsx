import {CounterApp} from "../src/CounterApp";
import {fireEvent, render, screen} from "@testing-library/react";

describe('Pruebas en el <CounterApp/>', () => {
    const value = 10

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={value}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar el valor inicial', () => {
        render(<CounterApp value={100}/>)
        expect(screen.getByText(100)).toBeTruthy()
    })

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
    })

    test('debe de deincrementar con el boton -1', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
    })

    test('debe funcionar el boton de reset', () => {
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        /*fireEvent.click(screen.getByText('Reset'))*/

        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))
        expect(screen.getByText('10')).toBeTruthy()

    })
})