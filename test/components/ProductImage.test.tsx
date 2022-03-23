

import React from 'react';
//import * as ReactDOM from 'react-dom';
import rendered from 'react-test-renderer';
import  ProductCard, {ProductImage}  from '../../src/components';

import { product2 } from '../data/products';




describe('Pruebas en el product image', () => {

    test('should show component with personalize title', () => { 
        
        const wrapper = rendered.create(
            <ProductImage img='https://hola.jpg' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('debe de mostrar el componente la imagen del producto', () => {
          
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <>
                              <ProductImage className='said'/>
                        </>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})