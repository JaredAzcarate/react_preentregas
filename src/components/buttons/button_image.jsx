import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export default function Button_image({img, title, description, centered, link}) {    

    return (
        
        <>
        <Link to={link} className="flex flex-col justify-center items-center w-full max-w-xs py-5 px-4 rounded-lg transition-all hover:bg-gray-100 border border-gray-300 text-gray-500 hover:shadow-sm cursor-pointer">
            <img src={img} alt={title} />
            <div className={`w-full ${centered && ('text-center')}`}>
                <p className="mt-5 font-bold">{title}</p>
                <p className="font-light">{description}</p>
            </div>
        </Link> 
        </>
    )
}