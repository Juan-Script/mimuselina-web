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
            <div className='px-[200px] lg:px-[40px] py-[100px]'>
                <Link href="/productos" className='[text-decoration:none] text-black text-[16px] font-semibold absolute -mt-20 -ml-20 md:-ml-4'>
                    Atrás
                </Link>
                {slug === 'suenos-dulces' && (
                    <div className='flex flex-row md:flex-col gap-10'>
                        <img className='max-h-[700px] min-h-[600px] md:min-h-0 rounded-3xl' src="/1.jpg" alt="Imagen de Sueños Dulces" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Body Sueños Dulces</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>El body "Sueños Dulces" es perfecto para envolver a tu pequeño en comodidad y suavidad. Confeccionado con materiales de alta calidad, este body asegura un ajuste cómodo y libre de irritaciones para la delicada piel de tu bebé. ¡Déjalo soñar tranquilo!</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl md:mt-10'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'pequeno-explorador' && (
                    <div className='flex flex-row md:flex-col gap-10'>
                        <img className='max-h-[700px] min-h-[600px] md:min-h-0 rounded-3xl' src="/2.jpg" alt="Imagen de Pequeño Explorador" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Body Pequeño Explorador</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>¡Prepara a tu bebé para descubrir el mundo con el body "Pequeño Explorador"! Este body está diseñado para acompañar a tu pequeño en todas sus aventuras, brindándole libertad de movimiento y comodidad durante todo el día. ¡Deja que su espíritu aventurero brille!</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    32.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl md:mt-10'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'estrellita-magica' && (
                    <div className='flex flex-row md:flex-col gap-10'>
                        <img className='max-h-[700px] min-h-[600px] md:min-h-0 rounded-3xl' src="/3.jpg" alt="Imagen de Estrellita Mágica" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Body Estrellita Mágica</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Dale a tu bebé el regalo de la magia con el body "Estrellita Mágica". Este adorable body está decorado con estrellas brillantes y lunas sonrientes, creando un ambiente mágico y encantador. Fabricado con telas suaves y delicadas, es perfecto para mimar a tu pequeño. ¡Déjalo brillar como una estrella!</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    25.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl md:mt-10'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'alegria-de-bebe' && (
                    <div className='flex flex-row md:flex-col gap-10'>
                        <img className='max-h-[700px] min-h-[600px] md:min-h-0 rounded-3xl' src="/4.jpg" alt="Imagen de Alegría de Bebé" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Body Alegría de Bebé</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>¡Celebra la alegría de la infancia con el body "Alegría de Bebé"! Con su diseño alegre y colorido, este body es perfecto para llenar cada día de risas y sonrisas. Fabricado con materiales suaves y resistentes, proporciona la máxima comodidad para tu pequeño mientras explora el mundo. ¡Haz que cada momento sea memorable!</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    49.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl md:mt-10'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'abrazos-suaves' && (
                    <div className='flex flex-row md:flex-col gap-10'>
                        <img className='max-h-[700px] min-h-[600px] md:min-h-0 rounded-3xl' src="/5.jpeg" alt="Imagen de Abrazos Suaves" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Body Abrazos Suaves</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Envuelve a tu bebé en amor y ternura con el body "Abrazos Suaves". Este body está diseñado para brindar una sensación de seguridad y calidez, como un abrazo de mamá. Confeccionado con tejidos suaves y elásticos, proporciona una comodidad incomparable para tu pequeño. ¡Que los abrazos sean infinitos!</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    61.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl md:mt-10'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'sonrisa-encantadora' && (
                    <div className='flex flex-row md:flex-col gap-10'>
                        <img className='max-h-[700px] min-h-[600px] md:min-h-0 rounded-3xl' src="/BodySonrisa.jpg" alt="Imagen de Sonrisa Encantadora" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Body Sonrisa Encantadora</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>¡Inspira sonrisas con el body "Sonrisa Encantadora"! Este adorable body está decorado con divertidos diseños y colores vibrantes que seguramente iluminarán el día de todos. Fabricado con materiales de alta calidad, ofrece una suavidad excepcional para la piel delicada de tu bebé. ¡Que la magia de la sonrisa nunca se apague!</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    70.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl md:mt-10'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'rayo-de-sol' && (
                    <div className='flex flex-row md:flex-col gap-10'>
                        <img className='max-h-[700px] min-h-[600px] md:min-h-0 rounded-3xl' src="/9.webp" alt="Imagen de Rayo de Sol" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Body Rayo de Sol</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>Deja que tu bebé brille con el body "Rayo de Sol". Con su diseño brillante y radiante, este body es perfecto para alegrar cualquier día nublado. Fabricado con tejidos suaves y transpirables, garantiza la máxima comodidad para tu pequeño mientras disfruta del sol. ¡Que cada día sea tan brillante como un rayo de sol!</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    52.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl md:mt-10'>
                                Comprar
                            </div>
                        </div>
                    </div>
                )}

                {slug === 'traje-fallero-liam' && (
                    <div className='flex flex-row md:flex-col gap-10'>
                        <img className='max-h-[700px] min-h-[600px] md:min-h-0 rounded-3xl' src="/TrajeLiam.jpg" alt="Imagen de Rayo de Sol" />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-col'>
                                <h1>Traje Fallero Liam</h1>
                                <p className='font-semibold'>Descripción: </p>
                                <p className='-mt-2'>¡Vistiendo tradición desde el primer día! El Traje Fallero Liam es la opción perfecta para los más pequeños de la casa. Este conjunto encantador captura la esencia de las fiestas valencianas, adaptado especialmente para la comodidad y estilo de tu bebé. Diseñado con amor y atención al detalle, este traje asegura que tu pequeño luzca adorable y esté cómodo durante todo el día.</p>
                                <div className='font-bold text-[24px] mt-4'>
                                    139.00 €
                                </div>
                            </div>
                            <div className='w-fit font-bold bg-[#FF445A] text-white px-6 py-4 rounded-3xl md:mt-10'>
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