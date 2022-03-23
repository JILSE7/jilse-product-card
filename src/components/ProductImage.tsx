import React,{ useContext } from 'react';
import { ProductContext } from './ProductCard';
import { IProductImageProps } from '../interfaces/ProductInterfaces';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


export const ProductImage = ({img = '', className, style}:IProductImageProps) => {

    const {product} = useContext(ProductContext);
  
    return (
      <img className={`${styles.productImg} ${className}`} src={(img) ? img : product.img ?? noImage} alt="Coffe mug" style={style}/>
    )
  }