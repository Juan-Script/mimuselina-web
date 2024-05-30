
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className="flex md:flex-col items-center justify-between gap-20 px-[300px] xl:px-[150px]">
            <div className='flex flex-col gap-[20px]'>
                <div className='text-[84px] leading-[120%] font-semibold w-full max-w-[640px] lg:text-[42px]'>
                    Fomentando la comodidad de su bebé
                </div>
                <div className='text-lg leading-[160%] font-medium text-text'>
                    La tienda para bebés para cada momento precioso
                </div>

                <Link href="/productos" className='[text-decoration:none] max-w-[200px] font-bold mt-20 rounded-81xl bg-accent flex flex-row items-center justify-center py-4 px-5 text-white'>
                    Comprar ahora
                </Link>
            </div>

            <div className='cover w-[320px] md:w-[280px] md:h-[280px] h-[320px] bg-[#FFC8BB] p-4 rounded-lg'>
                <img
                    className='rounded-lg md:w-[280px] md:h-[280px] '
                    alt='img'
                    src="/BodySonrisaHero.png"
                    width={320}
                    height={320}
                />
            </div>
        </div>
    )
}
