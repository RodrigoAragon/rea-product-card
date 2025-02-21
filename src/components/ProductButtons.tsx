import React  from "react"
import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css"

export interface Props{
  className?:string
  style?: CSSProperties
}

export const ProductButtons = ({className, style}:Props) =>{
    const {counter, increase, maxCount} = useContext(ProductContext)
    const isMaxReached = useCallback(
      () => {
        return !!maxCount && counter === maxCount? true : false 
      },
      [counter, maxCount],
    )
  
  return(
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button 
        className={styles.buttonMinus} 
        onClick={() => increase(-1)}> - </button>
  
      <div className={styles.countLabel}> {counter} </div>
  
      <button 
        className={isMaxReached()? `${styles.disabled}` :  `${styles.buttonAdd}`} 
        onClick={() => increase(+1)}> + </button>
    </div>
  )
}