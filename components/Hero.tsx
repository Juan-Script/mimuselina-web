
import React from 'react'

export default function Hero() {
    return (
        <div className="flex items-center justify-between gap-20 mt-10 px-[300px]">
            <div className='flex flex-col gap-[20px]'>
                <div className='text-[84px] leading-[120%] font-semibold w-full max-w-[640px]'>
                    Fomentando la comodidad de su bebé
                </div>
                <div className='text-lg leading-[160%] font-medium text-text'>
                    La tienda para bebés para cada momento precioso
                </div>

                <div className='max-w-[200px] font-bold mt-20 rounded-81xl bg-accent flex flex-row items-center justify-center py-4 px-5 text-white'>
                    Comprar ahora
                </div>
            </div>

            <div className='cover w-[365px] h-[365px] bg-[#FFC8BB] p-4 rounded-lg'>
                <img
                    className='rounded-lg'
                    alt='img'
                    src="/image-1@2x.png"
                    width={365}
                    height={365}
                />
            </div>
        </div>
    )
}
