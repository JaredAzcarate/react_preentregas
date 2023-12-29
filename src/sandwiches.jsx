import Products_grid from './components/products/products_grid'
import Header from './components/header/header'
import Navbar from './components/nav/navbar'

export default function Sandwiches() {



  return (
    <>
      <section className={'flex'} data-aos="fade-right">
        <Navbar />
        <div className={'w-full max-w-screen-lg mx-auto mb-20'}>
          <Header title={'Menú principal'} description={'Navega a través de las categorías.'} navButtons={true} />
          <Products_grid />
        </div>
      </section>

    </>
  )
}
