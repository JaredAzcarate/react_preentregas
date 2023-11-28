const menu = [
    {title: 'Inicio', img: '/icons/inicio.png'},
    {title: 'Recompensas', img: '/icons/recompensa.png'},
    {title: 'Cupones', img: '/icons/cupones.png'},
    {title: 'Novedad', img: '/icons/novedad.png', class: 'mb-5'},
    {title: 'Sandwiches & Comidas', img: '/icons/sandwiches.png'},
    {title: 'McNuggets & Comidas', img: '/icons/nuggets.png'},
    {title: 'Papas fritas', img: '/icons/papas.png'},
    {title: 'Cajita Feliz', img: '/icons/cajita.png'},
    {title: 'McCafe Panadería', img: '/icons/panaderia.png'},
    {title: 'Postres & Helados', img: '/icons/postres.png'},
    {title: 'Para compartir', img: '/icons/compartir.png'},
    {title: 'Menú por $1', img: '/icons/economico.png'},
]

export default function Navbar() {
    return (
        <>
        <div className=" max-w-[15rem] border-r absolute border-gray-300 top-0 left-0 bg-white">
            <div className=" flex items-center justify-center mb-10 py-10">
                <img src="/brand/mac.png" className=" w-20"></img>
            </div>
            
            <div className=" bg-gray-100">
                {menu.map(item =>(
                    <a href="#" className={` bg-white hover:bg-gray-100 hover:font-bold transition-all flex gap-5 justify-start items-center p-5 border-b border-gray-300 ${item.class}`}>
                        <img src={item.img}></img>
                        <p className="text-base text-gray-500" >{item.title}</p>
                    </a>
                    
                ))}
            </div>
        </div>
        </>
    )
}