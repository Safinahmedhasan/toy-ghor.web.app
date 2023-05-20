
import { Carousel } from 'flowbite-react';


const Banner = () => {




    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img  src="https://i.ibb.co/RbjcGxt/ng6m-Dwp-J9a-SAZYU2-Sgbwofjh35-Li8-Pd6f-Cdr4-Hc-Z.jpg" alt="" />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://i.ibb.co/JKfkHz1/Banner-03-small.webp" alt="" />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://i.ibb.co/r44RRrQ/slider-default.webp" alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;