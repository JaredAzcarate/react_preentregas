import { useEffect, useState } from "react"
import Product_item from "./product_item"
import State_pending from "../states/state_pending"
import { useParams } from 'react-router-dom'
import { buscar_datos } from "../../utils/new_promise"


export default function Products_grid() {

    const [products, setProducts] = useState ()

    /* Parametros para hacer el filtro */
    const {category} = useParams()

    useEffect(() => {

        buscar_datos
            .then( productos => {
                const filter = category
                ? productos.filter(item => item.categoria === category)
                : productos.filter(item => item.categoria === 'hamburguesas-de-carne' || item.categoria === 'hamburguesas-de-pollo' || item.categoria === 'hamburguesas-de-pescado');

                setProducts(filter)
            })
        
    }, [category]);

    return (
        <>
            {products ? (
                <section className=" grid grid-cols-3 gap-5 max-w-screen-lg mx-auto" data-aos='fade-up'>
                    {products.map((producto) => (
                            <Product_item 
                            key={producto.id}
                            item={producto} 
                            />
                    ))}
                </section>                        
            ):(
                <State_pending />
            )}
        </>
    )
}