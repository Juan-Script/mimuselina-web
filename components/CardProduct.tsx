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
        <Link href={`/productos/${slug}`} className="[text-decoration:none] flex flex-col items-start justify-start gap-[20px]">
            <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_87px)] bg-text w-[174px] h-[174px] mix-blend-multiply" />
                <img
                    className="absolute top-[-8px] left-[-26px] w-[308px] h-[308px] object-cover"
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
