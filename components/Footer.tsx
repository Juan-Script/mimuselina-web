import React from 'react'

export default function Footer() {
    return (
        <div className="w-full relative bg-primary h-[434px] overflow-hidden shrink-0 text-gray-1 -mt-20">
            <div className="absolute top-[366px] left-[150px] flex flex-row items-start justify-start gap-[567px] text-sm">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                    <div className="relative leading-[160%] font-medium">
                        Copyrigt © 2023 Baby Shop
                    </div>
                    <div className="w-px relative box-border h-[11px] border-r-[1px] border-solid border-text" />
                    <div className="relative leading-[160%] font-medium">
                        Design by TokoTema
                    </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[10px]">
                    <div className="relative leading-[160%] font-medium">
                        Terms of Use
                    </div>
                    <div className="w-px relative box-border h-[11px] border-r-[1px] border-solid border-text" />
                    <div className="relative leading-[160%] font-medium">
                        Privacy Policy
                    </div>
                </div>
            </div>
            <div className="absolute top-[325.5px] left-[calc(50%_-_570.5px)] box-border w-[1141px] h-px border-t-[1px] border-solid border-text" />
            <div className="absolute top-[64px] left-[calc(50%_-_570px)] w-[1137.5px] h-14 text-white">
                <div className="absolute top-[23px] left-[calc(50%_+_199.75px)] flex flex-row items-start justify-start gap-[24px]">
                    <div className="relative tracking-[0.01em] leading-[100%] font-semibold">
                        Home
                    </div>
                    <div className="relative tracking-[0.01em] leading-[100%] font-semibold">
                        Productos
                    </div>
                </div>
                <div className="absolute top-[12px] left-[376px] flex flex-row items-start justify-start gap-[24px]">
                    <img
                        className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icon-1.svg"
                    />
                    <img
                        className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icon-2.svg"
                    />
                    <img
                        className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icon-3.svg"
                    />
                    <img
                        className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icon-4.svg"
                    />
                    <img
                        className="w-8 relative rounded-81xl h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/icon-4.svg"
                    />
                </div>
                <b className="absolute top-[0px] left-[0px] text-21xl leading-[140%] text-orange-1">
                    <span className="text-white">Mimuselina</span>
                </b>
            </div>
            <div className="absolute top-[184px] left-[150px] flex flex-row items-start justify-start gap-[143px] text-orange-light-1">
                <div className="flex flex-col items-start justify-start gap-[22px]">
                    <div className="relative leading-[160%] font-medium">Llámanos</div>
                    <b className="relative text-5xl leading-[140%]">
                        +34 644 222 321
                    </b>
                </div>
                <div className="flex flex-col items-start justify-start gap-[22px]">
                    <div className="relative leading-[160%] font-medium">Email</div>
                    <b className="relative text-5xl leading-[140%]">info@mimuselina.com</b>
                </div>
                <div className="flex flex-col items-start justify-start gap-[22px]">
                    <div className="relative leading-[160%] font-medium">Localidad</div>
                    <b className="relative text-5xl leading-[140%]">
                        Valencia
                    </b>
                </div>
            </div>
        </div>
    )
}
