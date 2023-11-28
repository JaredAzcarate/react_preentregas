export default function Button({ haveLink, isOutline, haveIcon, setIcon, href, setEvent, text, setClass}) {
    return(
        <>
        {haveLink ?(
            <div  className={`text-center w-full px-10 py-4 border cursor-pointer rounded-lg transition-all ${setClass} ${haveIcon ? 'flex gap-3': ''} ${isOutline ? `border-gray-300 text-gray-500 hover:bg-yellow hover:text-white hover:border-yellow hover:font-bold rounded-lg`:`border-yellow bg-yellow font-bold text-white hover:bg-gray-500 hover:border-transparent`}`}>
                {haveIcon ? (<img src={setIcon} ></img>): ('')}
                <a href={href}>{text}</a>
            </div>

        ):(
            <button onClick={setEvent}>
                {text}
            </button>
        )}

        </>
    )
    
}