

import React from 'react';
//import * as ReactDOM from 'react-dom';
import rendered from 'react-test-renderer';
import  ProductCard  from '../../src/components';

import { product2 } from '../data/products';


const {act} = rendered;

describe('Pruebas en el product card', () => {

    test('debe mostrar el componente correctamente', () => { 
        
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test("Debe incrementar el contador", () => {

        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    ({count, increasyBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increasyBy(1)}>+1</button>
                        </>
                        
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        })


        tree = wrapper.toJSON();
        //console.log((tree as any).children[1]);
        expect((tree as any).children[1].children[0]).toBe("0")
    })
  
})