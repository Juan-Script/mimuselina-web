import React from 'react'
import CardProduct from './CardProduct'

export default function Products() {
    return (
        <div className='py-[20px] px-[200px]'>
            <div className='font-bold text-[34px]'>
                Productos
            </div>

            <div className='grid grid-cols-3 gap-[60px] mt-10'>
                <CardProduct
                    title='Sueños Dulces'
                    price='49.00 €'
                    image='/1.jpg'
                    slug='suenos-dulces'
                />

                <CardProduct
                    title='Pequeño Explorador'
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
                    title='Alegría de Bebé'
                    price='49.00 €'
                    image='/4.jpg'
                    slug={'alegria-de-bebe'}
                />

                <CardProduct
                    title='Abrazos Suaves'
                    price='49.00 €'
                    image='/5.jpeg'
                    slug={'abrazos-suaves'}
                />

                <CardProduct
                    title='Sonrisa Encantadora'
                    price='32.00 €'
                    image='/6.jpg'
                    slug={'sonrisa-encantadora'}
                />

                <CardProduct
                    title='Rayo de Sol'
                    price='49.00 €'
                    image='/9.webp'
                    slug={'rayo-de-sol'}
                />
            </div>
        </div>
    )
}
