import { useEffect, useState } from "react"
import Button from "../buttons/button"
import { useParams } from "react-router-dom"

export default function Product_item({novedad, img, title, price, id, categoria}) { 

    return (
        
        <>
        <section className="relative flex flex-col justify-center items-center w-full max-w-xs py-5 px-4 rounded-lg transition-all hover:bg-gray-100 border border-gray-300 text-gray-500 hover:shadow-sm">
            {novedad && (
                <div className=" absolute top-3 left-0 bg-yellow w-2/6 max-w-[10rem]">
                    <p className=" font-light text-xs text-center text-white">Novedad</p>
                </div>                
            )}

            <img src={img}/>
            <div className=" w-full">
                <p className="mt-5 font-bold">{title}</p>
                <p className=" font-light">$ {price}</p>
            </div>
            <Button haveLink={true} link={`/productos/${categoria}/${id}`} text={'Agregar'} setClass={'py-2 mt-5'}/>
        </section> 
        </>
    )
}