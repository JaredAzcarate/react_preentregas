import { useState } from 'react'
import Button from '../buttons/button'

export default function Checkout_footer() {
    const [selectProduct, setSelectProduct] = useState(0);
    const [total, setTotal] = useState(0.00); /* Necesito saber como puedo mostrar este valor en la pantall con los 4 digitos */

    function sumarProductos() {
      setSelectProduct(selectProduct + 1);
      setTotal(total + 10)
    }

    function restarProductos() {
      setSelectProduct(selectProduct - 1);
      setTotal(total - 10);

      if (selectProduct === 0 ){
        setSelectProduct(selectProduct);
        setTotal(total);
      }
    }

    return (
      <>
        <footer className='fixed bottom-0 left-0 w-full h-44 bg-gray-100 flex justify-between items-center'>

            <div className=' bg-yellow h-full w-[15rem] flex flex-col justify-center items-center gap-5'>
                <img src='/icons/scan.png' alt='escanear con camara' className='w-16'></img>
                <p className='text-center leading-4'>Escanea para <span className=' font-bold'> <br></br>iniciar sesión</span></p>
            </div>
            <div className=' w-8/12 mx-auto flex justify-center gap-5'>

                <div className=' w-6/12 grid gap-5'>

                    <div className='flex gap-8 items-end'>

                        <div className='relative w-10 h-10'>
                            <img src='/icons/checkout-box.png' alt='total seleccionado en checkout' className='w-12'></img>
                            <div className='absolute -top-5 -right-5 w-10 h-10 bg-red rounded-full text-white flex justify-center items-center font-bold text-xl'>
                                {selectProduct}
                            </div>
                        </div>

                        <p className='font-extrabold text-4xl'>${total}</p>

                        <div className='flex gap-3'>
                            <button className='w-10 h-10 bg-gray-300 rounded-full hover:bg-yellow transition-all text-lg' onClick={restarProductos}>-</button>
                            <button className='w-10 h-10 bg-gray-300 rounded-full hover:bg-yellow transition-all text-lg' onClick={sumarProductos}>+</button>
                        </div>

                    </div>
                    <div>
                      <p className='text-xs text-gray-500'><span className='font-bold'>Bases y Condiciones:</span> La aplicación es responsable por transacciones mal operadas. El usuario debe notificar cualquier inconveniente. La plataforma se compromete a resolver problemas de manera eficiente.</p>

                      <a className='text-xs font-light text-yellow' href='https://www.figma.com/file/yMAdfMXCZ9Cz9TKhkTetz5/App-Mac-Donalds?type=design&node-id=0%3A1&mode=design&t=aleMRuX9XoxLN14H-1' target='black'>Link de figma</a>
                    </div>

                </div>
                
                <div className='w-6/12 grid grid-cols-2 gap-2'>
                    <Button haveLink={true} isOutline={false} text={'Ver mi pedido'} setClass={'col-span-2 font-bold py-4'}/>
                    <Button haveLink={true} isOutline={true} text={'Volver a empezar'} setClass={'col-span-1 font-bold py-4'}/>
                    <Button haveLink={true} isOutline={true} haveIcon={true} setIcon={'/icons/accesibilidad.png'} text={'Accesibilidad'} setClass={'col-span-1 font-bold py-4'}/>
                </div>
            </div>

        </footer>
      </>
    )
  }