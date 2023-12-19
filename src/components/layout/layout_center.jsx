import { useEffect, useState } from "react"

export default function Layout_center({children}) {

    return (
        <section className="flex flex-col items-center justify-center">
            {children}
        </section>
    )
}