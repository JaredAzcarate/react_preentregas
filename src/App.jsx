import './App.css'
import Section_nav_buttons from './components/sections/section_nav_buttons'
import Checkout_footer from './components/checkout/checkout_footer'

function App() {

  return (
    <>
    <main className=' py-10 w-full max-w-screen-md mx-auto'>

        <div className='mb-10'>
          <p className=' text-5xl font-extrabold'>Sandwiches & Comidas</p>
          <p className=' text-gray-500 text-xl font-extralight '>Navega a través de las categorías.</p>
        </div>

        <Section_nav_buttons />

        <section className='my-10'>
          <img src="/banners/main.png" alt="banner" className='rounded-lg'/>
        </section>

        <a className='font-light text-gray-500' href='https://www.figma.com/file/yMAdfMXCZ9Cz9TKhkTetz5/App-Mac-Donalds?type=design&node-id=0%3A1&mode=design&t=aleMRuX9XoxLN14H-1' target='black'>Link de figma</a>

        <Checkout_footer />

    </main>
    </>
  )
}

export default App
