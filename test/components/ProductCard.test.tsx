import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import {ProductCard} from '../../src/components/ProductCard';
import { product1 } from '../data/products';
describe('Pruebas en el ProductCard', () => {

    it('Debe mostrar el componente correctamente', () => {
        const wrapper = render(
            <ProductCard product={product1}>
                {
                    () =>(
                        <h1>ProductCard</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper).toMatchSnapshot()
    });

    it('Debe incrementar el contador', () => {
        const wrapper = render(
            <ProductCard product={product1}>
                {
                    ({count, increase}) => (
                        <>
                            <h1>ProductCard</h1>
                            <span aria-label='counter'>{count}</span>
                            <button onClick={() => increase(+1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        )


        const button = wrapper.getByText('+1')
        const counter = wrapper.getByLabelText('counter')

        fireEvent.click(button)

        expect(counter.innerHTML).toBe("1")
    });

    it('Debe mantenerse en 0 cuando se intente disminuir el contador', () => {
        const wrapper = render(
            <ProductCard product={product1}>
                {
                    ({count, increase}) => (
                        <>
                            <h1>ProductCard</h1>
                            <span aria-label='counter'>{count}</span>
                            <button onClick={() => increase(-1)}>-1</button>
                        </>
                    )
                }
            </ProductCard>
        )


        const button = wrapper.getByText('-1')
        const counter = wrapper.getByLabelText('counter')

        fireEvent.click(button)

        expect(counter.innerHTML).toBe("0")
    });


    it('Debe disminuir el contador', () => {
        const wrapper = render(
            <ProductCard product={product1} value={4}>
                {
                    ({count, increase}) => (
                        <>
                            <h1>ProductCard</h1>
                            <span aria-label='counter'>{count}</span>
                            <button onClick={() => increase(-1)}>-1</button>
                        </>
                    )
                }
            </ProductCard>
        )


        const button = wrapper.getByText('-1')
        const counter = wrapper.getByLabelText('counter')

        fireEvent.click(button)

        expect(counter.innerHTML).toBe("3")
    });


    it('Debe resetear el contador al tocar el botón', () => {
        const wrapper = render(
            <ProductCard product={product1} value={4}>
                {
                    ({count, increase, reset}) => (
                        <>
                            <h1>ProductCard</h1>
                            <span aria-label='counter'>{count}</span>
                            <button onClick={() => increase(-1)}>-1</button>
                            <button onClick={() => reset()}>Reset</button>
                        </>
                    )
                }
            </ProductCard>
        )


        const button = wrapper.getByText('-1')
        const reset = wrapper.getByText('Reset')
        const counter = wrapper.getByLabelText('counter')

        fireEvent.click(button)
        fireEvent.click(reset)

        expect(counter.innerHTML).toBe("4")
    });

    it('No se debe poder incrementar el contador más alla del maxCount', () => {

        const initialValues = {
            count: 4,
            maxCount: 5
        }

        const wrapper = render(
            <ProductCard product={product1} initialValues={initialValues} >
                {
                    ({count, increase}) => (
                        <>
                            <h1>ProductCard</h1>
                            <span aria-label='counter'>{count}</span>
                            <button onClick={() => increase(+1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        )


        const button = wrapper.getByText('+1')
        const counter = wrapper.getByLabelText('counter')

        fireEvent.click(button)
        fireEvent.click(button)


        expect(counter.innerHTML).toBe("5")
    });

})