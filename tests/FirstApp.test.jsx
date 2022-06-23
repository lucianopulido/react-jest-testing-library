import {render} from "@testing-library/react";
import {FirstApp} from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {
/*    test('debe de hacer match con el snapshot', () => {

        const title = 'Hola, Soy Luciano'
        const {container} = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot()
    })*/

    test('debe mostrar el titulo en un h1', () => {
        const title = 'Hola, Soy Luciano'
        const {getByTestId} = render(<FirstApp title={title}/>)
        expect(getByTestId('test-title').innerHTML).toContain(title)
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, Soy Luciano'
        const subtitle ='Soy un subtitulo'
        const {getByText} = render(<FirstApp title={title} subTitle={subtitle}/>)
        expect(getByText(subtitle)).toBeTruthy()
    })
})