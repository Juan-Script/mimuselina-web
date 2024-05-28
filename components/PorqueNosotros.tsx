import React from 'react'

export default function PorqueNosotros() {
    return (
        <div className="w-full relative bg-white h-[764px] overflow-hidden shrink-0 text-xl text-orange-2">
            <div className="absolute top-[120px] left-[150px] flex flex-col items-start justify-start gap-[20px]">
                <b className="relative leading-[100%]">Por qué nosotros</b>
                <b className="w-[854px] relative text-37xl leading-[140%] inline-block text-primary">
                    ¿Por qué elegirnos para las necesidades de su bebé?
                </b>
                <div className="w-[524px] relative text-lg leading-[160%] font-medium text-text hidden">
                    La tienda para bebés para cada momento precioso
                </div>
            </div>
            <div className="absolute top-[374px] left-[calc(50%_-_604px)] flex flex-row items-start justify-start py-0 px-3 gap-[24px] text-5xl text-primary">
                <div className="w-[278px] relative h-[270px]">
                    <div className="absolute top-[32px] left-[0px] rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-14 px-8 pb-7 gap-[16px] border-[1px] border-solid border-gray-1">
                        <b className="w-[210px] relative leading-[140%] inline-block">
                            Precios mas bajos
                        </b>
                        <div className="w-[210px] relative text-base leading-[160%] font-medium text-text inline-block">
                            Pulvinar cras et sem egestas ullamcorper leo eu scelerisque.
                            Euismod eu elementum urna.
                        </div>
                    </div>
                    <img
                        className="absolute top-[0px] left-[24px] rounded-81xl w-16 h-16 overflow-hidden"
                        alt=""
                        src="/play-icon.svg"
                    />
                </div>
                <div className="w-[278px] relative h-[270px]">
                    <div className="absolute top-[32px] left-[0px] rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-14 px-8 pb-7 gap-[16px] border-[1px] border-solid border-gray-1">
                        <b className="w-[210px] relative leading-[140%] inline-block">
                            Entrega rápida
                        </b>
                        <div className="w-[210px] relative text-base leading-[160%] font-medium text-text inline-block">
                            Pulvinar cras et sem egestas ullamcorper leo eu scelerisque.
                            Euismod eu elementum urna.
                        </div>
                    </div>
                    <img
                        className="absolute top-[0px] left-[24px] rounded-81xl w-16 h-16 overflow-hidden"
                        alt=""
                        src="/play-icon1.svg"
                    />
                </div>
                <div className="w-[278px] relative h-[270px]">
                    <div className="absolute top-[32px] left-[0px] rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-14 px-8 pb-7 gap-[16px] border-[1px] border-solid border-gray-1">
                        <b className="w-[210px] relative leading-[140%] inline-block">
                            Orientación experta
                        </b>
                        <div className="w-[210px] relative text-base leading-[160%] font-medium text-text inline-block">
                            Pulvinar cras et sem egestas ullamcorper leo eu scelerisque.
                            Euismod eu elementum urna.
                        </div>
                    </div>
                    <img
                        className="absolute top-[0px] left-[24px] rounded-81xl w-16 h-16 overflow-hidden"
                        alt=""
                        src="/play-icon2.svg"
                    />
                </div>
                <div className="w-[278px] relative h-[270px]">
                    <div className="absolute top-[32px] left-[0px] rounded-2xl overflow-hidden flex flex-col items-start justify-start pt-14 px-8 pb-7 gap-[16px] border-[1px] border-solid border-gray-1">
                        <b className="w-[210px] relative leading-[140%] inline-block">
                            Atención al cliente
                        </b>
                        <div className="w-[210px] relative text-base leading-[160%] font-medium text-text inline-block">
                            Pulvinar cras et sem egestas ullamcorper leo eu scelerisque.
                            Euismod eu elementum urna.
                        </div>
                    </div>
                    <img
                        className="absolute top-[0px] left-[24px] rounded-81xl w-16 h-16 overflow-hidden"
                        alt=""
                        src="/play-icon3.svg"
                    />
                </div>
            </div>
        </div>
    )
}
