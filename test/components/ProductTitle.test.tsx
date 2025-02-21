import React from "react";
import {render} from "@testing-library/react"
import { ProductTitle } from '../../src/components/ProductTitle';
import { ProductCard } from "../../src/components/ProductCard";
import { product1 } from '../data/products';

describe('Pruebas en el Product Title', () => {

    it('Debe mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = render(<ProductTitle title="Custom Product"/>)

        expect(wrapper).toMatchSnapshot()
    });

    it('Debe mostrar el componente correctamente con el nombre del producto', () => {
        const wrapper = render(
        <ProductCard product={product1}>
            {
                () => (
                    <ProductTitle/>
                )
            }
        </ProductCard>
    )

        expect(wrapper).toMatchSnapshot()
    });
})