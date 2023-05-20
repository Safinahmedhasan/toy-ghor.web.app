import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Card } from 'flowbite-react';
import { useLoaderData } from "react-router-dom";


const SingleTabDetails = () => {

    const singleTab = useLoaderData();
    const { AvailableQuantity, Price, rating, Seller, mail, toyName, toyPhoto, } = singleTab;

    return (
        <div className='container mx-auto mt-20'>
            <div className='flex justify-center'>
                <Card className='w-9/12'>
                    <div className='md:flex justify-around items-center'>
                        <img className="h-80 w-96" src={toyPhoto} alt="" />
                        <div className='space-y-2'>
                            <h5 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-white">
                                {toyName}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                <span className='font-bold'>Seller:</span> {Seller}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className='font-bold'>Email:</span>: {mail}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className='font-bold'>Price:</span> ${Price}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                            <span className='font-bold'>Quantity:</span> <span className='bg-blue-600 text-white px-5 rounded-lg'>{AvailableQuantity}</span>
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400 flex">
                            <span className='font-bold'>Rating:</span>
                                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                            </p>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default SingleTabDetails;