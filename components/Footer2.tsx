import Link from 'next/link'
import React from 'react'

export default function Footer2() {
    return (
        <div className='flex flex-col justify-between bg-[#110506] text-white py-[80px] px-[100px] gap-20 h-full'>
            <div className='flex flex-row w-full justify-between'>
                <div className='text-[40px] font-bold'>
                    Mimuselina
                </div>

                <div className='flex flex-row gap-10'>
                    <Link href="/" className='[text-decoration:none] text-white'>
                        Home
                    </Link>
                    <Link href="/productos" className='[text-decoration:none] text-white'>
                        Productos
                    </Link>
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col justify-between'>
                    <div>
                        Llámanos
                    </div>
                    <div className='text-[24px]'>
                        +34 657 35 87 94
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <div>
                        Email
                    </div>
                    <div className='text-[24px]'>
                        kevinvaquerovlc@gmail.com
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <div>
                        Localidad
                    </div>
                    <div className='text-[24px]'>
                        Valencia
                    </div>
                </div>
            </div>
        </div>
    )
}
