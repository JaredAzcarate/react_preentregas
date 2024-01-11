import { Link } from "react-router-dom";

export default function Button({ haveLink, isOutline, haveIcon, setIcon, link, setEvent, text, setClass}) {
    return(
        <>
        {haveLink ?(
            <Link to={link} onClick={setEvent} className={`text-center px-10 border cursor-pointer rounded-lg transition-all flex items-center justify-center ${setClass} ${haveIcon ? 'gap-3': ''} ${isOutline ? `border-gray-300 text-gray-500 hover:bg-yellow hover:text-white hover:border-yellow hover:font-bold rounded-lg`:`border-yellow bg-yellow font-bold text-white hover:bg-gray-500 hover:border-transparent`}`}>
                {haveIcon ? (<img src={setIcon} ></img>): ('')}
                <p>{text}</p>
            </Link>

        ):(
            <button onClick={setEvent} className={`text-center px-10 border cursor-pointer rounded-lg transition-all flex items-center justify-center ${setClass} ${haveIcon ? 'gap-3': ''} ${isOutline ? `border-gray-300 text-gray-500 hover:bg-yellow hover:text-white hover:border-yellow hover:font-bold rounded-lg`:`border-yellow bg-yellow font-bold text-white hover:bg-gray-500 hover:border-transparent`}`}>
                {text}
            </button>
        )}

        </>
    )
    
}