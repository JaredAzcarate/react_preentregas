import { useEffect } from 'react';
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Products_grid from './components/products/products_grid'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Select_place from './select_place'
import Sandwiches from './sandwiches';
import Combine_Menu from './combine_menu';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Select_place />} />
          <Route path='/productos/sandwiches' element={<Sandwiches />} />
          <Route path='/productos/:category' element={<Sandwiches />} />
          <Route path='/productos/:category/:product_id' element={<Combine_Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
