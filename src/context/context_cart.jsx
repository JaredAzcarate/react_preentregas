import React, { useState, useEffect, createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [numerocompra, setNumeroCompra] = useState(1);
  const [place, setPlace] = useState('TakeAway');

  const addProduct = ( nuevoProducto ) => {
    setCart([...cart, nuevoProducto]) 
  }

  const selectPlace = (option) => {
    setPlace(option)
  }

  const endPurchase = () => {
    setNumeroCompra( numerocompra + 1)
  }

  const totalQuantity = () => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.cantidad;
    }, 0);
    setQuantity(total)    
  }

  const deleteCart = () => {
    setCart([])
  }

  const deleteItemCart = (id) => {
    setCart( cart.filter(item => item.id !== id) )
  }

  const totalToPay = () => {
    const suma = cart.map(producto => producto.precio * producto.cantidad).reduce((total, precio) => total + precio, 0);
    return suma
  }

  const addQuantity = (cantidad, setCantidad) => {
    setCantidad(cantidad + 1)
  }

  const deleteQuantity = (cantidad, setCantidad) => {
    setCantidad(cantidad > 1 ? cantidad - 1 : 1)
  }

  useEffect(() => {
    totalQuantity(); 

  }, [cart, place, numerocompra]);

  return (

    <CartContext.Provider 
      value={{ 
        cart, 
        addProduct, 
        totalToPay, 
        totalQuantity,
        deleteCart,
        deleteItemCart,
        quantity,
        addQuantity,
        deleteQuantity,
        selectPlace,
        place,
        endPurchase,
        numerocompra,
        }}>

        { children }

    </CartContext.Provider>
    
  );
};
