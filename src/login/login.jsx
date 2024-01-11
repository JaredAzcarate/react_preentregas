import { useContext, useEffect, useState } from "react";
import Button from "../components/buttons/button";
import Header from "../components/header/header";
import Layout_center from "../components/layout/layout_center";
import State_sucess from "../components/states/state_sucess";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { db } from "../firebase/config";
import { CartContext } from "../context/context_cart";

export default function Login() {

const {cart, place, totalToPay} = useContext(CartContext)
const navigate = useNavigate()
const [sucess, setSucess] = useState()

const [data, setData] = useState ({
    nombre: '',
    dni: '',
    mododepago: 'efectivo',
})

const totalPay = totalToPay()

const order = {
    ...data,
    cart,
    place,
    totalPay
}

const handledForm = (e) => {
    e.preventDefault()
    console.log(order);
    setSucess(true)
    
    const orderRef = collection(db, 'orders')
    addDoc(orderRef, order)
}

const handledInput = (e) => {

    const { name, value } = e.target;

    setData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
}

useEffect(()=>{
    if(sucess){
        setTimeout(() => {
            navigate('/ticket')
        }, 1000);
    }
},[sucess])

if (sucess){

    return(
        <State_sucess />
    )
}
  return (
    <section data-aos='fade-up'>
        
        <Layout_center>
            <Header centered={true}/>
            <p className=" text-3xl font-bold mb-10">Datos de factura</p>
            <form onSubmit={handledForm} className="flex flex-col gap-5">

                <input
                    name="nombre" 
                    value={data.nombre} 
                    className="p-2 focus:bg-gray-100 focus:outline-none rounded-md" 
                    type="text"
                    onChange={handledInput} 
                    placeholder="Nombre completo">
                </input>

                <input 
                    name="dni"
                    value={data.dni} 
                    className="p-2 focus:bg-gray-100 focus:outline-none rounded-md" 
                    type="number"
                    onChange={handledInput} 
                    placeholder="DNI">
                </input>

                <select 
                    name="mododepago"
                    value={data.mododepago}
                    onChange={handledInput}
                    className="p-2 focus:bg-gray-100 focus:outline-none rounded-md" >
                        <option value={'efectivo'} >Efectivo</option>
                        <option value={'tarjeta'} >Tarjeta de crédito o débito</option>
                </select>
                
                <button type="submit" disabled={data.nombre === '' | data.dni === ''} className="py-2 disabled:opacity-50 disabled:cursor-default text-center px-10 border cursor-pointer rounded-lg transition-all flex items-center justify-center border-yellow bg-yellow font-bold text-white hover:bg-gray-500 hover:border-transparent">Continuar</button>
            
            </form>        
        </Layout_center>
    </section>
  )
}
