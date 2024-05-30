import React from 'react'

export default function PorqueNosotros() {
    return (
        <div className="relative bg-white h-[fit px-[300px] xl:px-[150px] md:px-[40px] items-center justify-center overflow-hidden shrink-0 text-xl text-orange-2">
            <div className="flex flex-col items-start justify-start gap-[20px]">
                <b className="relative leading-[100%]">Por qué nosotros</b>
                <b className="w-full relative text-37xl leading-[140%] inline-block text-primary">
                    ¿Por qué elegirnos para las necesidades de su bebé?
                </b>
                <div className="w-full relative text-lg leading-[160%] font-medium text-text hidden">
                    La tienda para bebés para cada momento precioso
                </div>
            </div>
            <div className="mt-10 grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 mx-auto items-start justify-start py-0 px-3 gap-[24px] text-5xl text-primary">
                <div className="w-full relative h-[270px]">
                    <div className=" rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-7 px-8 pb-7 gap-[16px] border-[1px] border-solid border-gray-1">
                        <img
                            className="rounded-81xl w-16 h-16 overflow-hidden"
                            alt=""
                            src="/play-icon.svg"
                        />
                        <b className="w-full relative leading-[140%] inline-block">
                            Precios mas bajos
                        </b>
                        <div className="w-full relative text-base leading-[160%] font-medium text-text inline-block">
                            Ofrecemos los precios más competitivos para garantizarte el mejor valor.
                        </div>
                    </div>
                </div>
                <div className="w-full relative h-[270px]">
                    <div className="left-[0px] rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-7 px-8 pb-7 gap-[16px] border-[1px] border-solid border-gray-1">
                        <img
                            className="rounded-81xl w-16 h-16 overflow-hidden"
                            alt=""
                            src="/play-icon1.svg"
                        />
                        <b className="w-full relative leading-[140%] inline-block">
                            Entrega rápida
                        </b>
                        <div className="w-full relative text-base leading-[160%] font-medium text-text inline-block">
                            Recibe tus compras rápidamente con nuestro servicio de entrega eficiente.
                        </div>
                    </div>
                </div>
                <div className="w-full relative h-[270px]">
                    <div className="rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-7 px-8 pb-7 gap-[16px] border-[1px] border-solid border-gray-1">
                        <img
                            className="rounded-81xl w-16 h-16 overflow-hidden"
                            alt=""
                            src="/play-icon2.svg"
                        />
                        <b className="w-full relative leading-[140%] inline-block">
                            Orientación experta
                        </b>
                        <div className="w-full relative text-base leading-[160%] font-medium text-text inline-block">
                            Nuestro equipo te brinda asesoría profesional y personalizada.
                        </div>
                    </div>
                </div>
                <div className="w-full relative h-[270px]">
                    <div className="rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-7 px-8 pb-7 gap-[16px] border-[1px] border-solid border-gray-1">
                        <img
                            className="rounded-81xl w-16 h-16 overflow-hidden"
                            alt=""
                            src="/play-icon3.svg"
                        />
                        <b className="w-full relative leading-[140%] inline-block">
                            Atención al cliente
                        </b>
                        <div className="w-full relative text-base leading-[160%] font-medium text-text inline-block">
                            Disfruta de una atención al cliente amigable y resolutiva.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
