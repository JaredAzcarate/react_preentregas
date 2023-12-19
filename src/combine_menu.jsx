import { useEffect, useState } from "react"
import Layout_center from "./components/layout/layout_center"
import Header from "./components/header/header"
import Button_image from "./components/buttons/button_image"
import { useParams } from "react-router-dom"
import { buscar_datos } from "./utils/new_promise"
import State_pending from "./components/states/state_pending"

export default function Combine_Menu() {

    const [selectProduct, setSelectProduct] = useState (null)
    const {category, product_id} = useParams()
    const productData = selectProduct

    useEffect(()=>{

        buscar_datos
        .then( productos => {
            const filterCategory = productos.filter(filtro => filtro.categoria === category)
            return filterCategory
        })

        .then(categoria => {
            const filterProduct = categoria[0].productos.find(item => item.id === Number(product_id))

            setSelectProduct(filterProduct);
        })
        
    })

    return (
        
        <>
        {selectProduct ? (
        <Layout_center>
        <Header title={`¿Deseas combinar tu ${productData.nombre} con un menú?`} centered={true}/>
            <main className="grid grid-cols-2 gap-5">

                <Button_image img={'https://mcdonalds.es/api/cms/images/mcdonalds-es/dd43faa5-5c36-43fb-8529-e62c05dc416c_menu_icono.png?auto=compress,format'} title={'Combinar con menú'} centered={true} link={'#'}/>
                <Button_image img={productData.img} title={'Continuar con la compra'} centered={true} link={'#'}/>

            </main>
        </Layout_center>  
        ):(
            <State_pending />
        )}
   
        </>
    )
}