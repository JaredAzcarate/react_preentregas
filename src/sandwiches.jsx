import Checkout_footer from './components/checkout/checkout_footer'
import Products_grid from './components/products/products_grid'
import Header from './components/header/header'
import Navbar from './components/nav/navbar'

export default function Sandwiches() {



  return (
    <>
      <Navbar />

      <Header title={'Menú principal'} description={'Navega a través de las categorías.'} navButtons={true} />

      <Products_grid />

      <Checkout_footer />
    </>
  )
}
