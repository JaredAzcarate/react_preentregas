import { Link, NavLink } from "react-router-dom"
import Data_menu from "../../../data/data_navbar"

export default function Navbar() {
    return (
        <>
        <div className=" max-w-[20rem] border-r border-gray-300 bg-white">
            <div className=" flex items-center justify-center mb-10 py-10">
                <Link to={'/'}><img src="/brand/mac.png" className=" w-20"/></Link>
            </div>
            
            <div className=" bg-gray-100">
                {Data_menu.map(item =>(
                    <NavLink key={item.title} to={item.link} className={({ isActive }) =>
                    isActive ? 'bg-gray-100 font-bold transition-all flex gap-5 justify-start items-center p-5 border-b border-gray-300 ${item.class}' : `bg-white hover:bg-gray-100 hover:font-bold transition-all flex gap-5 justify-start items-center p-5 border-b border-gray-300 ${item.class}`}>
                        <img src={item.img} className=" w-16"></img>
                        <p className="text-base text-gray-500" >{item.title}</p>
                    </NavLink>
                    
                ))}
            </div>
        </div>
        </>
    )
}