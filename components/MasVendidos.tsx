import React from 'react'

export default function MasVendidos() {
    return (
        <div className="w-full relative bg-orange-light-1 h-[930px] overflow-hidden shrink-0 text-37xl text-primary">
            <div className="absolute top-[120px] left-[150px] flex flex-col items-start justify-start gap-[20px]">
                <b className="w-[735px] relative leading-[140%] inline-block">
                    Productos más vendidos
                </b>
                <div className="w-[657px] relative text-base leading-[160%] font-medium text-text inline-block">
                    Pulvinar cras et sem egestas ullamcorper leo eu scelerisque. Euismod
                    eu elementum urna pretium ut nunc eleifend vestibulum ultrices.
                    Fringilla libero pellentesque pharetra feugiat libero leo.
                </div>
            </div>
            <div className="absolute top-[171px] right-[150px] rounded-81xl bg-accent flex flex-row items-center justify-center py-8 px-16 text-base text-white">
                <b className="relative leading-[100%]">Ver todos</b>
            </div>
            <div className="absolute top-[360px] left-[calc(50%_-_612px)] flex flex-row items-start justify-start py-0 px-3 gap-[24px] text-xs text-accent-hover">
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_87px)] bg-text w-[174px] h-[174px] mix-blend-multiply" />
                        <img
                            className="absolute top-[-19px] left-[0px] w-[305px] h-[305px] object-cover"
                            alt=""
                            src="/image-3@2x.png"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="relative leading-[140%]">Pushchair Section</div>
                        <b className="relative text-5xl leading-[140%] text-primary">
                            Body bebé
                        </b>
                        <div className="w-[282px] relative text-base leading-[160%] font-medium text-text inline-block">
                            In et risus ipsum in ornare. Ultrices sit volutpat condimentum
                            sed id.
                        </div>
                        <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                            $225.00
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_87px)] bg-text w-[174px] h-[174px] mix-blend-multiply" />
                        <img
                            className="absolute top-[-27px] left-[0px] w-[322px] h-[322px] object-cover"
                            alt=""
                            src="/image-13@2x.png"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="relative leading-[140%]">{`Toys & Gift Section`}</div>
                        <b className="relative text-5xl leading-[140%] text-primary">
                            Rulo antigolpes
                        </b>
                        <div className="w-[282px] relative text-base leading-[160%] font-medium text-text inline-block">
                            In et risus ipsum in ornare. Ultrices sit volutpat condimentum
                            sed id.
                        </div>
                        <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                            $225.00
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_87px)] bg-text w-[174px] h-[174px] mix-blend-multiply" />
                        <img
                            className="absolute top-[-8px] left-[-26px] w-[308px] h-[308px] object-cover"
                            alt=""
                            src="/image-9@2x.png"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="relative leading-[140%]">Carrier Section</div>
                        <b className="relative text-5xl leading-[140%] text-primary">
                            Bandanas quitababas
                        </b>
                        <div className="w-[282px] relative text-base leading-[160%] font-medium text-text inline-block">
                            In et risus ipsum in ornare. Ultrices sit volutpat condimentum
                            sed id.
                        </div>
                        <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                            $225.00
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[20px]">
                    <div className="w-[282px] relative rounded-2xl bg-white h-[268px] overflow-hidden shrink-0">
                        <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_87px)] bg-text w-[174px] h-[174px] mix-blend-multiply" />
                        <img
                            className="absolute top-[-18px] left-[-11px] w-[304.5px] h-[304.5px] object-cover"
                            alt=""
                            src="/image-11@2x.png"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[10px]">
                        <div className="relative leading-[140%]">Shoe Section</div>
                        <b className="relative text-5xl leading-[140%] text-primary">
                            Paños de lactancia
                        </b>
                        <div className="w-[282px] relative text-base leading-[160%] font-medium text-text inline-block">
                            In et risus ipsum in ornare. Ultrices sit volutpat condimentum
                            sed id.
                        </div>
                        <div className="relative text-lg leading-[160%] font-medium text-orange-1">
                            $225.00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
