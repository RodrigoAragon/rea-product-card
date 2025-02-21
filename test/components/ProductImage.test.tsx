import React from "react";
import { render } from "@testing-library/react";
import { ProductImage } from "../../src/components/ProductImage";
import { product1 } from "../data/products";
import { ProductCard } from "../../src/components/ProductCard";

describe('Pruebas en el ProductImage', () => {

    it('Se tiene que renderizar el componente con imagen', () => {
        const wrapper = render(
            <ProductImage img="https://hola.jpg"/>
        )

        expect(wrapper).toMatchSnapshot()
    });

    // it('Se tiene que renderizar el componente sin imagen', () => {
    //     const wrapper = render(<ProductImage/>)

    //     expect(wrapper).toMatchSnapshot()
    // });

    it('Se tiene que renderizar el componente con producto personalizado', () => {
        const wrapper = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper).toMatchSnapshot()
    });
})