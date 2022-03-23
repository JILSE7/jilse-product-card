import React from 'react';
//import * as ReactDOM from 'react-dom';
import rendered from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product } from '../data/products';




describe('Pruebas en el product title', () => {

    test('should show component with personalize title', () => { 
        
        const wrapper = rendered.create(
            <ProductTitle title='Custom Product' className='said'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    })

    test('debe de mostrar el componente con el nombre del producto', () => {
          
        const wrapper = rendered.create(
            <ProductCard product={product}>
                {
                    () => (
                        <>
                              <ProductTitle title='Custom Product' className='said'/>
                        </>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})
