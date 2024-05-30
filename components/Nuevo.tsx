import Link from 'next/link'
import React from 'react'

export default function Nuevo() {
  return (
    <div className="flex flex-col bg-light-pink h-full px-[300px] lg:px-[150px] md:px-[40px] py-20 overflow-hidden items-center justify-center -mt-20 -mb-20">
      <div className="flex flex-col items-center justify-start gap-[20px] text-center text-xl text-orange-2">
        <b className="relative leading-[100%] text-left">Nuevo</b>
        <b className="relative text-37xl md:text-[42px] leading-[140%] inline-block text-primary">
          Da la bienvenida a la última incorporación a nuestra tienda para bebés
        </b>
        <div className="self-stretch relative text-base mb-10 leading-[160%] font-medium text-text">
          Descubre las últimas novedades en nuestra tienda para bebés, ¡todo lo que necesitas para tu pequeño!
        </div>
      </div>
      <div className="flex flex-row md:flex-col items-center justify-center gap-[24px]">
        <div className="rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
          <img
            className="w-full max-w-[300px] object-contain"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
        <div className="rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
          <img
            className="max-w-[300px]  object-contain"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
        <div className="rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
          <img
            className="max-w-[300px]  object-contain"
            alt=""
            src="/image-10@2x.png"
          />
        </div>
      </div>
      <Link href="/productos" className="[text-decoration:none] mt-20 rounded-81xl bg-accent flex flex-row items-center justify-center py-8 px-16 text-white">
        <b className="relative leading-[100%]">Ver más</b>
      </Link>
    </div>
  )
}
