import { useContext, useState } from 'react'
import { CartContext } from '../../context/context_cart'

export default function Checkout_resume({item}) {
  
    const { totalToPay, deleteItemCart } = useContext(CartContext)

    return (
      <>
        {item.length === 0 ? (
                  <p className='text-center'>Tu carrito está vacio</p>
                ):(
                  
                  <div className='mb-5' data-aos="fade-left">
                    <p className='text-2xl font-extrabold'>Resumen de compra</p>

                    {item.map(resume => (
                      <div key={resume.id} className='py-2 w-full flex gap-4 justify-between items-center border-b-gray-300 border-b'>
                        <img src={resume.img} className='w-10' />
                        <p className='max-w-[5rem]'>{resume.nombre}</p>
                        <p>{resume.cantidad}</p>
                        <button onClick={ () => deleteItemCart(resume.id) } className='bg-gray-300 hover:bg-red rounded-full w-5 h-5 flex items-center justify-center text-sm text-gray-500 hover:text-white transition-all'>x</button>
                      </div>
                      ))}
                      <div className='mt-2 flex justify-between text-xl font-extrabold'>
                        <p>Total</p>
                        <span>${totalToPay()}</span>
                      </div>
                  </div>
                )}
      </>
    )
  }