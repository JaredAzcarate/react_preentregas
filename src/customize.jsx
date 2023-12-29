import { useContext, useEffect, useState } from "react"
import { CartContext } from '../src/context/context_cart'
import { useParams } from "react-router-dom"
import { buscar_datos } from "./utils/new_promise"
import Quantity_selector from "./components/buttons/quantitySelector"
import Button from "./components/buttons/button"
import Checkout_nav from "./components/checkout/checkout_nav"
import Layout_center from "./components/layout/layout_center"
import { useNavigate } from "react-router-dom";


export default function Customize_Menu() {

    /* Se utiliza el parametro del path para comparar con el id del producto filtrado */
    const{ product_id } = useParams()

    /* Se obtiene la funcion addProduct para actualizar el array del carrito */
    const{ addProduct } = useContext(CartContext)

    /* Se utiliza este state para almacenar el objeto a almacenar en el carrito */
    const [productoAgregar, setProductoAgregar] = useState()
    
    /*  Se utiliza este state para almacenar el valor del producto filtrado*/
    const [producto, setProducto] = useState([])

    /* Se utiliza este state para definir la cantidad */
    const[cantidad, setCantidad] = useState(1)

    /* UseEffect para simular la obtencion de datos */
    useEffect( () => {

        /* Se utiliza una promesa para buscar el producto dentro del array original con todos los productos */
        buscar_datos

            .then(( productos )=> {
                const buscarProducto = productos.find(item => item.id === Number(product_id))
                setProductoAgregar(buscarProducto)
                return buscarProducto
            })

            .then(producto_escogido => {
                /* Se alamacena el objeto filtrado dentro de un array para poder manipular con map */
                setProducto([producto_escogido])
            })

    }, [])

    /* Se concatena la informacion de las opciones junto al producto seleccionado en un objeto que se almacena en el array "cart" */
    const concatOptions = {
        ...productoAgregar, cantidad
    }

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
      }

    return (
        
        <>
        
        <section className=" flex justify-between" data-aos="fade-left">
            <Button haveLink={false} isOutline={false} setEvent={()=>goBack()} text={'Volver'} setClass={'max-w-[5rem] rounded-none'}/>
            <Layout_center>
            {producto.map( item => (
                <section key={item.id} className="flex items-center gap-5 max-w-screen-lg mx-auto" >
                    <img 
                        src={item.img} 
                        className=" w-6/12"/>

                    <div>
                        {item.novedad && (
                            <div className="animate-pulse mb-5 p-1 rounded-lg bg-yellow w-1/6">
                                <p className=" font-bold text-sm text-center text-white">Nuevo</p>
                            </div>                
                        )}
                        <p className="text-5xl font-bold mb-5">{item.nombre}</p>
                        <p className="text-base">{item.descripcion}</p>
                        <div className="mt-5">
                            <div className="flex items-center gap-5">
                                <p className="text-gray-500">Unidades</p> 
                                <Quantity_selector cantidad={cantidad} setCantidad={setCantidad} />

                            </div>
                        </div>
                        
                        <Button 
                            haveLink={true} 
                            isOutline={false} 
                            link={'#'} 
                            setEvent={ () => addProduct(concatOptions)} 
                            text={'Agregar a mi pedido'} 
                            setClass={'py-2 mt-5'}/>
                    </div>

                </section>
            ))}
            </Layout_center>

            <Checkout_nav />
        </section>
        
        </>
        
    )
}