import './customerReview.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CustomerReview = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with custom options if needed
    }, []);

    return (

        <div className='container mx-auto'>
            <h2 className="text-4xl  hexfont text-center mt-20 text-blue-600 ">Customer Review</h2>
            <div className='md:flex justify-around items-center mt-10 md:ml-0 ml-8 '>

                <div data-aos="fade-right">
                    <figure className="snip1390 zoom">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
                        <figcaption>
                            <h2>Eleanor Crisp</h2>
                            <h4><img src="https://i.ibb.co/mcN4sYr/pngwing-com.png" alt="" /></h4>
                            <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
                        </figcaption>
                    </figure>
                </div>


                <div data-aos="fade-up">
                    <figure className="snip1390 zoom">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
                        <figcaption>
                            <h2>Gordon Norman</h2>
                            <h4><img className='h-40' src="https://i.ibb.co/3THzdBF/pngwing-com-1.png" alt="" /></h4>
                            <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say am. I think my cerebellum has just fused. </blockquote>
                        </figcaption>
                    </figure>
                </div>

                <div data-aos="fade-left">

                    <figure className="snip1390 zoom">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
                        <figcaption>
                            <h2>Sue Shei</h2>
                            <h4><img src="https://i.ibb.co/mcN4sYr/pngwing-com.png" alt="" /></h4>
                            <blockquote>The strength to change what I can, the inability to accept what I  and the incapacity to tell the difference.</blockquote>
                        </figcaption>
                    </figure>
                </div>

            </div>

        </div>

    );
};

export default CustomerReview;