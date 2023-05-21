import {  FaFacebookF, FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="container mx-auto mt-20  border rounded-lg drop-shadow-md mb-10">
            <div className="grid md:grid-cols-6 bg-[#FFFFFF] p-20 w-full">
                <div className="col-span-3">
                    <img src="https://i.ibb.co/n6bHc9v/logo.png" alt="" />
                </div>
                <div>
                    <h2 className="text-xl text-[#6B7280] font-bold mb-4">ABOUT</h2>
                    <p className="text-[#858A96]">Feedback</p>
                    <p className="text-slate-400">Feedback</p>
                </div>
                <div>
                <h2 className="text-slate-500 text-xl font-bold mb-4">FOLLOW US</h2>
                <p className="text-slate-400">Facebook</p>
                <p className="text-slate-400">Instagram</p>
                </div>
                <div>
                <h2 className="text-slate-500 text-xl font-bold mb-4">LEGAL</h2>
                <p className="text-slate-400">Privacy Policy</p>
                <p className="text-slate-400">Terms & Conditions</p>
                </div>
            </div>
            <div className='flex justify-between p-5'>
                <h1 className='text-blue-600 text-sm'>© 2023 Car Ghor</h1>
                <div className='flex'>
                    <span className='text-blue-600'><FaFacebookF /></span>
                    <span className='ml-3 text-red-500'><FaInstagram /></span>
                    <span className='ml-3 text-red-700'><FaGoogle /></span>
                    <span className='ml-3 text-slate-900'><FaGithub /></span>
                </div>
            </div>
        </div>
    );
};

export default Footer;