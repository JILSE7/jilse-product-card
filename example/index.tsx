import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ProductCard from '../dist/components';

const product = {
  id:'1',
  nameProduct: "coffe card",
  
}

const App = () => {
  return (
    <div>
     <ProductCard product={product} initialValues={{count:0, maxCount:10}}>
  {
    ({count,increasyBy,isMaxCountReached,reset}) => {

      return(
        <>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
      
        </>
    )
    }
  }
</ProductCard> 
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
