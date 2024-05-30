import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center bg-white px-[80px] md:px-[20px] overflow-hidden shrink-0 py-5">
            <Link className='[text-decoration:none] items-center justify-center' href="/">
                <img src="/Logotipo.png" alt="Logo de Mimuselina" className="w-[52px] -mb-2" />
                <b className="text-5xl md:hidden leading-[140%] text-orange-1">
                    Mimuselina
                </b>
            </Link>
            <div className="flex flex-row items-start justify-start gap-[24px] ">
                <Link href="/" className="[text-decoration:none] font-semibold text-primary">
                    Home
                </Link>
                <Link href="/productos" className="[text-decoration:none]  font-semibold text-primary">
                    Productos
                </Link>
            </div>
            <div className="w-fit rounded-81xl bg-accent flex flex-row items-center justify-center py-6 px-10 md:hidden">
                <b className="relative leading-[100%] text-white">Contacta</b>
            </div>
        </div>
    )
}
