import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer2 from '../../components/Footer2';
import Link from 'next/link';


export default function Slug() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div className='font-heading-5'>
            <Header />
            <div className='px-[200px] py-[100px]'>
                <Link href="/productos" className='[text-decoration:none] text-black text-[16px] font-semibold absolute -mt-20 -ml-20'>
                    Atrás
                </Link>
                {slug === 'suenos-dulces' && (
                    <div className='flex flex-row gap-10'>
                        <img className='max-h-[700px] rounded-3xl' src="/1.jpg" alt="Imagen de Sueños Dulces" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Sueños Dulces</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>El body "Sueños Dulces" es perfecto para envolver a tu pequeño en comodidad y suavidad. Confeccionado con materiales de alta calidad, este body asegura un ajuste cómodo y libre de irritaciones para la delicada piel de tu bebé. ¡Déjalo soñar tranquilo!</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'pequeno-explorador' && (
                    <div className='flex flex-row gap-10'>
                        <img className='max-h-[700px] rounded-3xl' src="/2.jpg" alt="Imagen de Pequeño Explorador" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Pequeño Explorador</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'estrellita-magica' && (
                    <div className='flex flex-row gap-10'>
                        <img className='max-h-[700px] rounded-3xl' src="/3.jpg" alt="Imagen de Estrellita Mágica" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Estrellita Mágica</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'alegria-de-bebe' && (
                    <div className='flex flex-row gap-10'>
                        <img className='max-h-[700px] rounded-3xl' src="/4.jpg" alt="Imagen de Alegría de Bebé" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Alegría de Bebé</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'abrazos-suaves' && (
                    <div className='flex flex-row gap-10'>
                        <img className='max-h-[700px] rounded-3xl' src="/5.jpeg" alt="Imagen de Abrazos Suaves" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Abrazos Suaves</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'sonrisa-encantadora' && (
                    <div className='flex flex-row gap-10'>
                        <img className='max-h-[700px] rounded-3xl' src="/6.jpg" alt="Imagen de Sonrisa Encantadora" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Sonrisa Encantadora</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'rayo-de-sol' && (
                    <div className='flex flex-row gap-10'>
                        <img className='max-h-[700px] rounded-3xl' src="/8.jpeg" alt="Imagen de Rayo de Sol" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Rayo de Sol</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='mt-20'>
                <Footer2 />
            </div>

        </div>
    );
}