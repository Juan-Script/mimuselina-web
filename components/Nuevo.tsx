import Link from 'next/link'
import React from 'react'

export default function Nuevo() {
  return (
    <div className="w-full relative bg-light-pink h-[921px] overflow-hidden shrink-0 items-center justify-center -mt-20 -mb-20">
      <div className="absolute top-[533px] left-[calc(50%_-_447px)] flex flex-row items-start justify-start gap-[24px]">
        <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_87px)] bg-text w-[174px] h-[174px] mix-blend-multiply" />
          <img
            className="absolute top-[-45px] left-[-16px] w-[313px] h-[313px] object-cover"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
        <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_87px)] bg-text w-[174px] h-[174px] mix-blend-multiply" />
          <img
            className="absolute top-[0px] left-[0px] w-[313px] h-[313px] object-cover"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
        <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
          <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_87px)] bg-text w-[174px] h-[174px] mix-blend-multiply" />
          <img
            className="absolute top-[0px] left-[-11px] w-[339px] h-[339px] object-cover"
            alt=""
            src="/image-10@2x.png"
          />
        </div>
      </div>
      <Link href="/productos" className="[text-decoration:none] absolute top-[414px] left-[calc(50%_-_104.5px)] rounded-81xl bg-accent flex flex-row items-center justify-center py-8 px-16 text-white">
        <b className="relative leading-[100%]">Ver más</b>
      </Link>
      <div className="w-full mt-20 top-[120px] left-[calc(50%_-_490px)] flex flex-col items-center justify-start gap-[20px] text-center text-xl text-orange-2">
        <b className="relative leading-[100%] text-left">Nuevo</b>
        <b className="w-[981px] relative text-37xl leading-[140%] inline-block text-primary">
          Da la bienvenida a la última incorporación a nuestra tienda para bebés
        </b>
        <div className="self-stretch relative text-base leading-[160%] font-medium text-text">
          Descubre las últimas novedades en nuestra tienda para bebés, ¡todo lo que necesitas para tu pequeño!
        </div>
      </div>
    </div>
  )
}
