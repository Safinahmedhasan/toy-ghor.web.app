// import React from 'react'
import Carousel from 'better-react-carousel'
import './Gallery.css'

const Gallary = () => {
    return (
        <div className='container mx-auto rounded-xl '>
            <h2 className='text-4xl hexfont text-center mt-16 mb-5 text-blue-600 '>Toy Gallery</h2>
            <div className='border border-blue-600 rounded-lg p-5'>
                <Carousel cols={3} rows={2} gap={10} loop >
                    <Carousel.Item>
                        <img className='rounded-xl' width="100%" src="https://i.ibb.co/1sM7sYj/wallpaperflare-com-wallpaper-8.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-xl' width="100%" src="https://i.ibb.co/t8LJ9P0/fdgfgd.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='relative'>
                            <img className='rounded-xl' width="100%" src="https://i.ibb.co/LvgCxSN/dfdf.jpg" />
                            <div className='absolute bottom-0  text-center sfdfd container mx-auto'>
                                <h2 className='text-white font-bold text-2xl'>Super Car</h2>
                                <p>Take a Drive into Adventure with our Toy Cars</p>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-xl' width="100%" src="https://i.ibb.co/CzT42HL/wallpaperflare-com-wallpaper-9.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-xl' width="100%" src="https://i.ibb.co/pQrVy4X/35340998-studio-shot-of-red-blue-and-yellow-sports-cars.webp" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='rounded-xl h-60' width="100%" src="https://i.ibb.co/NNCW1fF/61rv-XPv-Qs-RL-SL1010.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* anything you want to show in the grid */}
                    </Carousel.Item>
                    {/* ... */}
                </Carousel>
            </div>

        </div>
    );
};

export default Gallary;