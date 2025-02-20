# REA-Product-Card

Este es un paquete de pruebas de despliegue de NPM


## Ejemplo
```
    <ProductCard 
    product={product}
    initialValues = {{
        count:4,
        maxCount:10
    }}
    >
    {
        () =>(
        <>
            <ProductImage/>
            <ProductTitle/>
            <ProductButtons/>
        </>
        )
    }
    </ProductCard>
```