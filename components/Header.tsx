import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center bg-white px-[80px] overflow-hidden shrink-0 py-10">
            <b className="text-5xl leading-[140%] text-orange-1">
                Mimuselina
            </b>
            <div className="flex flex-row items-start justify-start gap-[24px] text-primary">
                <div className="font-semibold">
                    Home
                </div>
                <Link href="/productos" className="[text-decoration:none]  font-semibold text-primary">
                    Productos
                </Link>
            </div>
            <div className="w-fit rounded-81xl bg-accent flex flex-row items-center justify-center py-6 px-10">
                <b className="relative leading-[100%]">Contacta</b>
            </div>
        </div>
    )
}
