import React, { JSX }  from "react"
import { createContext, CSSProperties } from "react";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/Products.interfaces';
import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css"

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext


export interface Props{
  children?: (args: ProductCardHandlers) => JSX.Element
  className?: string
  product: Product
  style?: CSSProperties
  onChange?: (args:onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}


export const ProductCard = ({children, product, className, style, onChange, value, initialValues}:Props) => {

  const {counter, increase, maxCount, isMaxCountReached, reset} =  useProduct({onChange, product, value, initialValues});

  return (
    <Provider 
      value={{
        counter,
        increase,
        maxCount,
        product
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>

      {
        children && children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increase,
          reset,
      })
      }

      </div>
    </Provider>
    
  )
}