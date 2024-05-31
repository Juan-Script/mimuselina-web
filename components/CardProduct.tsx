import Link from 'next/link'
import React from 'react'

interface Props {
    title: string
    price: string
    image: string
    slug?: any
}

export default function CardProduct({ title, price, image, slug }: Props) {
    return (
        <Link href={`/productos/${slug}`} className="[text-decoration:none] flex flex-col items-start justify-start gap-[20px] w-full">
            <div className="w-[308px] -ml-3 rounded-2xl relative bg-white h-[308px] p-3 shrink-0">
                <img
                    className="rounded-2xl w-full h-[308px] object-cover"
                    alt=""
                    src={image}
                />
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px]">
                <b className="relative text-5xl leading-[140%] text-primary">
                    {title}
                </b>
                <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                    {price}
                </div>
            </div>
        </Link>
    )
}
