import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from "../interfaces/Products.interfaces"

interface useProductArgs{
    product: Product;
    onChange?: (args:onChangeArgs) => void;
    value?:number
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)

    const increase = (value: number) => {
        
        const newValue = Math.max(counter+value, 0)

        if(initialValues?.maxCount && (newValue) > initialValues?.maxCount)
            return

        setCounter( newValue)
        
        onChange && onChange({count: newValue, product})
    }

    const reset = () =>{
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if(!isMounted.current) return
      setCounter(value)
    }, [value])

    // useEffect(() => {
    //     isMounted.current = true;
    // }, [])
    
    

    return{
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increase,
        reset
    }
}
