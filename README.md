# jilse-Product-Card

Estes es un paquete de pruebas de despliegues en NPM

### Said Mandujano

## Ejemplo 

```
import {ProductCard} from 'jilse-product-car
```

```
<ProductCard product={product} initialValues={{count:4, maxCount:10}}>
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
```