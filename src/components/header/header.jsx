import Section_nav_buttons from "../sections/section_nav_buttons";

export default function Header({title, description, navButtons, centered}) {
    return(
        <>
        <header className=' pt-10 w-full max-w-screen-md mx-auto'>
            {centered && (<img src="/brand/mac.png" className=" mx-auto w-14 mb-5"/>)}
            <div className={`mb-10 ${centered && ('text-center')}`}>
            <p className={`text-5xl font-extrabold mb-5`} data-aos='fade'>{title}</p>
            <p className={`text-gray-500 text-xl font-extralight`}>{description}</p>
            </div>
            {navButtons && (<Section_nav_buttons />)}
        </header>
        </>
    )
}