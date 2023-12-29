import { useContext } from "react"
import { CartContext } from "../../context/context_cart"
import Header from "../header/header"
import Button from "../buttons/button"
import Layout_center from "../layout/layout_center"

export default function Ticket() {

    const{cart, totalToPay, place, numerocompra,deleteCart } = useContext(CartContext)
 
    return(
        <>  
            <Layout_center>
            
                <Header title={'¡Gracias por tu compra!'} description={'Dirigite a la caja de pago en efectivo y presenta este ticket.'} centered={true}/>
                <div className="w-96 mx-auto bg-gray-100 p-10 rounded-md shadow-lg" data-aos="fade-down">
                    <div className="flex justify-between mb-5 text-3xl font-bold" >
                        <p>Pedido</p>
                        <p>#00{numerocompra}</p>
                    </div>
                    <div>
                        <div className="flex justify-between font-bold py-2 border-b border-gray-300">
                            <p>Tipo de pedido:</p>
                            <p>{place}</p>
                        </div>
                        
                        {cart.map(item => (
                            <div key={item.id} className="flex justify-between my-2">
                                <p>{item.nombre}</p>
                                <p>{item.cantidad}</p>
                            </div>
                            ))}
                        <div className="flex justify-between text-lg font-bold pt-2 mt-2 border-t border-gray-300">
                            <p>Total</p>
                            <p>${totalToPay()}</p>
                        </div>
                    </div>

                </div>
                <Button 
                    haveLink={true} 
                    isOutline={false} 
                    text={'Iniciar nueva compra'} 
                    setClass={'font-bold py-4 w-96 mx-auto mt-10 animate-pulse'} 
                    link={'/'}
                    setEvent={()=>deleteCart()}
                    />

            </Layout_center>
        </>
    )
    
}