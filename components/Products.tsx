import React from 'react'
import CardProduct from './CardProduct'

export default function Products() {
    return (
        <div className='py-[20px] px-[300px] lg:px-[40px]'>
            <div className='font-bold text-[34px]'>
                Productos
            </div>

            <div className='mx-auto grid grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-[60px] mt-10 w-full'>
                <CardProduct
                    title='Body Sueños Dulces'
                    price='49.00 €'
                    image='/1.jpg'
                    slug='suenos-dulces'
                />

                <CardProduct
                    title='Body Pequeño Explorador'
                    price='32.00 €'
                    image='/2.jpg'
                    slug={'pequeno-explorador'}
                />

                <CardProduct
                    title='Estrellita Mágica'
                    price='25.00 €'
                    image='/3.jpg'
                    slug={'estrellita-magica'}
                />

                <CardProduct
                    title='Traje Fallero Liam'
                    price='139.00 €'
                    image='/BodyTraje.jpg'
                    slug={'traje-fallero-liam'}
                />

                <CardProduct
                    title='Body Alegría de Bebé'
                    price='49.00 €'
                    image='/4.jpg'
                    slug={'alegria-de-bebe'}
                />

                <CardProduct
                    title='Body Abrazos Suaves'
                    price='61.00 €'
                    image='/5.jpeg'
                    slug={'abrazos-suaves'}
                />

                <CardProduct
                    title='Body Sonrisa Encantadora'
                    price='70.00 €'
                    image='/BodySonrisa.jpg'
                    slug={'sonrisa-encantadora'}
                />

                <CardProduct
                    title='Body Rayo de Sol'
                    price='52.00 €'
                    image='/9.webp'
                    slug={'rayo-de-sol'}
                />
            </div>
        </div>
    )
}
