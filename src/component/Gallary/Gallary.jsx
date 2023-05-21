
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

const Gallary = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with custom options if needed
    }, []);

    return (
        <div>
            <h2 className="text-4xl hexfont text-center mt-20 text-blue-600 ">Toy Gallery</h2>
            <div className="container mx-auto px-5 py-2 lg:px-20 lg:pt-14">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div data-aos="zoom-in" className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/Y79yNvM/giorgio-trovato-p0-Ol-RAAYXLY-unsplash-1.jpg" />
                        </div>
                        <div data-aos="zoom-in-up" className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/zHVwF7v/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash-1.jpg" />
                        </div>
                        <div data-aos="zoom-in" className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/fk8QqDr/gustavo-S-W9v-DL5wh-U-unsplash-1.jpg" />
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/42QCf06/giorgio-trovato-0-CZwu-Zhi-C84-unsplash-1.jpg" />
                        </div>
                        <div data-aos="zoom-in" className="w-1/2 p-1 md:p-2">
                            <img 
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/PYjHHCF/nubia-navarro-rg7z-Bt2c-A-Q-unsplash.jpg" />
                        </div>
                        <div data-aos="zoom-in-up" className="w-1/2 p-1 md:p-2">
                        <img 
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/Jz4bP9L/eric-nopanen-Euf-Bd-G-ZQMs-unsplash.jpg" />
                                
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallary;