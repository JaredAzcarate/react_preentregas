import { useContext } from "react"
import { CartContext } from "../../context/context_cart"

export default function Quantity_selector({cantidad, setCantidad}) {

    const{deleteQuantity, addQuantity} = useContext(CartContext)
 

    return(
        <>
        <div className="flex items-center"> 
            <button 
                onClick={()=>deleteQuantity(cantidad, setCantidad)} 
                className={`w-5 h-5 rounded-sm bg-gray-500 text-white flex items-center justify-center ${cantidad === 1 && 'opacity-30'}`}>-</button>
                
                <p className="w-10 text-center  text-gray-500 ">{ cantidad }</p>

            <button 
                onClick={()=>addQuantity(cantidad, setCantidad)} 
                className="w-5 h-5 rounded-sm bg-gray-500 text-white flex items-center justify-center">+</button>
        </div>
        </>
    )
    
}