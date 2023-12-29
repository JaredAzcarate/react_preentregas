import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Select_place from './select_place'
import Sandwiches from './sandwiches';
import { CartProvider} from './context/context_cart';
import Customize_Menu from './customize';
import Ticket from './components/ticket/ticket';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <CartProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Select_place />} />
            <Route path='/productos/sandwiches' element={<Sandwiches />} />
            <Route path='/productos/:category' element={<Sandwiches />} />
            <Route path='/productos/:category/:product_id' element={<Customize_Menu />} />
            <Route path='/ticket' element={<Ticket />} />
          </Routes>
        </BrowserRouter>
    </CartProvider>

    </>
  )
}

export default App
