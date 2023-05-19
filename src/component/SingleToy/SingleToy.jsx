import { Card } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import './SingleToy.css'


const SingleToy = () => {

    const SingleToy = useLoaderData();

    const { AvailableQuantity, Price, Rating, Seller, SubCategory, description, mail, toyName, toyPhoto, } = SingleToy;

    return (
        <div>
            <div className="w-96 mx-auto excss rounded-lg mt-10">
                <Card>
                    <img src={toyPhoto} alt="" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {toyName}
                    </h5>
                    <div className="bg-blue-300 p-5 rounded-lg">
                        <p className=" text-gray-700 dark:text-gray-400 font-bold">
                            Sellar : {Seller}
                        </p>
                        <p>Email: {mail}</p>
                    </div>
                    <div className="bg-blue-300 p-5 rounded-lg font-bold">
                        <p>Category: {SubCategory}</p>
                        <p className="mt-2">Quantity: <span className="bg-blue-500 px-3 rounded-2xl text-white">{AvailableQuantity}</span></p>
                    </div>
                    <p><span className="font-bold">Description:</span> {description}</p>
                    <p className="bg-blue-300 p-5 rounded-lg">Price: ${Price}</p>
                    <p>{Rating}</p>
                </Card>
            </div>
        </div>
    );
};

export default SingleToy;