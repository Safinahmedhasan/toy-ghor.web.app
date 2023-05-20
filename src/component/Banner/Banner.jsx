import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'

const Banner = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with custom options if needed
    }, []);


    return (
        <div className="">
            <section className="banner bg-cover bg-center">
                <div className="container mx-auto text-center pt-28 w-2/3">
                    <h1 className="text-4xl text-blue-800 font-bold mb-4" data-aos="fade-right"> Get ready to experience the thrill of the race with the Velocity Racer Super Car Toy</h1>
                    <p data-aos="fade-left" className="text-lg text-gray-800 mb-8 font-bold">Take a Drive into Adventure with our Toy Cars</p>
                    <a data-aos="fade-down" href="#" className="btn-primary">Learn More</a>
                </div>
            </section>

        </div>
    );
};

export default Banner;