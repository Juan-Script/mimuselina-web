import Link from 'next/link'
import React from 'react'

export default function MasVendidos() {
    return (
        <div className="relative bg-orange-light-1 h-full px-[300px] py-20 lg:px-[150px] md:px-[40px] items-center justify-center overflow-hidden shrink-0 text-37xl text-primary">
            <div className="flex flex-col items-start justify-start gap-[20px]">
                <b className="w-full relative leading-[140%] inline-block">
                    Productos más vendidos
                </b>
                <div className="w-full relative text-base leading-[160%] font-medium text-text inline-block">
                Descubre nuestra colección de los productos más vendidos para bebés, seleccionados por nuestros clientes como sus favoritos. Desde suaves y acogedores bodys hasta adorables conjuntos y accesorios esenciales, aquí encontrarás las prendas más populares que combinan calidad, comodidad y estilo para tu pequeño. ¡No te pierdas lo mejor de nuestra tienda!
                </div>
            </div>
            <div className="mt-20 grid grid-cols-4 xl:grid-cols-2 sm:grid-cols-1 items-start justify-start py-0 px-3 gap-[24px] text-xs text-accent-hover">
                <Link href={"/productos/pequeno-explorador"} className="[text-decoration:none] flex flex-col items-center justify-center gap-[20px]">
                    <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                        <img
                            className="absolute w-[305px] h-[305px] object-cover"
                            alt=""
                            src="/2.jpg"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <b className="relative text-5xl leading-[140%] text-primary">
                            Body Pequeño Explorador
                        </b>
                        <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                            32.00 €
                        </div>
                    </div>
                </Link>
                <Link href={"/productos/estrellita-magica"} className="[text-decoration:none] flex flex-col items-center justify-center gap-[20px]">
                    <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                        <img
                            className="absolute w-[322px] h-[322px] object-cover"
                            alt=""
                            src="/3.jpg"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <b className="relative text-5xl leading-[140%] text-primary">
                            Estrellita Mágica
                        </b>
                        <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                            25.00 €
                        </div>
                    </div>
                </Link>
                <Link href={"/productos/sonrisa-encantadora"} className="[text-decoration:none] flex flex-col items-center justify-center gap-[20px]">
                    <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                        <img
                            className="absolute w-[308px] h-[308px] object-cover"
                            alt=""
                            src="/BodySonrisa.jpg"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <b className="relative text-5xl leading-[140%] text-primary">
                            Body Sonrisa Encantadora
                        </b>
                        <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                            70.00 €
                        </div>
                    </div>
                </Link>
                <Link href={"/productos/rayo-de-sol"} className="[text-decoration:none] flex flex-col items-center justify-center gap-[20px]">
                    <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                        <img
                            className="absolute w-[304.5px] h-[304.5px] object-cover"
                            alt=""
                            src="/9.webp"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <b className="relative text-5xl leading-[140%] text-primary">
                            Body Rayo de Sol
                        </b>
                        <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                            52.00 €
                        </div>
                    </div>
                </Link>
            </div>
            <Link href="/productos" className="[text-decoration:none] max-w-[120px] mx-auto mt-10 rounded-81xl bg-accent flex flex-row items-center justify-center py-8 px-16 text-base text-white">
                <b className="relative leading-[100%]">Ver todos</b>
            </Link>
        </div>
    )
}
