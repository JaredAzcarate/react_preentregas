import { Link } from "react-router-dom"

export default function Product_item({item}) { 

    return (
        <>
        <Link 
            to={`/productos/${item.categoria}/${item.id}`}>

                <section className="relative flex flex-col justify-center items-center w-full max-w-xs py-5 px-4 rounded-lg transition-all hover:bg-gray-100 border border-gray-300 text-gray-500 hover:shadow-sm">
                    {item.novedad && (
                        <div className="animate-pulse absolute top-3 right-3 p-2 rounded-lg bg-yellow w-2/6 max-w-[10rem]">
                            <p className=" font-bold text-sm text-center text-white">Nuevo</p>
                        </div>                
                    )}

                    <img src={item.img}/>
                    
                    <div className=" w-full">
                        <p className="mt-5 font-bold">{item.nombre}</p>
                        <p className=" font-light">$ {item.precio}</p>
                    </div>

                </section> 
        </Link>
    </>
    )
}