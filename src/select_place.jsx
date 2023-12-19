import { useEffect, useState } from "react"
import Header from "./components/header/header"
import Button_image from "./components/buttons/button_image"
import DataPlace from '../data/data_select_place'
import Layout_center from "./components/layout/layout_center"

export default function Select_place() {

    return (

        <Layout_center>
            <Header title={'¿Dónde deseas comer tu pedido?'} centered={true}/>

            <main className="grid grid-cols-2 gap-5">
                {DataPlace.map(option => (
                    <Button_image key={option.title} img={option.img} title={option.title} centered={option.centered} link={option.link}/>
                    ))}
            </main>
        </Layout_center>

    )
}