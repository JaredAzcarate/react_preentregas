import { useContext, useState } from 'react'
import Button from '../buttons/button'
import { CartContext } from '../../context/context_cart'
import Product_item from '../products/product_item'
import { useNavigate } from 'react-router-dom'
import Checkout_resume from './checkout_resume'

export default function Checkout_nav() {

  const navigate = useNavigate()

  const { cart, endPurchase, deleteCart, quantity} = useContext(CartContext)

  

    return (
      <>
        <section className=' overflow-y-auto max-w-xs min-h-screen rounded-s-2xl bg-gray-100 flex flex-col justify-end items-center'>
            
            {/* Seccion de checkout */}
            <div className='flex flex-col h-full justify-center  gap-5 p-8'>

              {/* Icono de carrito de Mc dinamico */}
              <div className='flex flex-col items-center gap-8'>
                <div className='relative w-24 h-auto'>
                  <img src='/icons/checkout-box.png' alt='total seleccionado en checkout' className='w-32'></img>
                  <div className='absolute -top-5 -right-5 w-10 h-10 bg-red rounded-full text-white flex justify-center items-center font-bold text-xl'>
                      {quantity}
                  </div>
                </div>
              </div>

              {/* Seccion de resumen */}
              <div>
                {cart.length === 0 ? (
                  <p className='text-center'>Tu carrito está vacio</p>
                ):(
                  <>
                  <Checkout_resume item={cart}/>

                  {/* Seccion de botones */}
                  <div className='grid grid-cols-1 gap-2'>
                          <Button 
                          haveLink={true} 
                          isOutline={false} 
                          text={'Finalizar compra'} 
                          setClass={`font-bold py-4`} 
                          link={'/ticket'}
                          setEvent={()=> endPurchase()}
                          />

                          <Button 
                          haveLink={true} 
                          isOutline={true} 
                          text={'Volver a empezar'} 
                          setClass={'font-bold py-4'} 
                          link={'/productos/sandwiches'}
                          setEvent={()=>deleteCart()}
                          />
                          
                  </div>
                  </>

                )}
              </div>
              
            </div>

            {/* Seccion de bases y condiciones de compra */}
            <div className=' bg-yellow p-8 grid gap-5'>
                <p className='text-xs text-black'><span className='font-bold'>Bases y Condiciones:</span> La aplicación es responsable por transacciones mal operadas. El usuario debe notificar cualquier inconveniente. La plataforma se compromete a resolver problemas de manera eficiente.</p>
            </div>


        </section>
      </>
    )
  }