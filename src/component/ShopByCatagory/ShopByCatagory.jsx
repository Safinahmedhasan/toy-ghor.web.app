import { Button, Card } from "flowbite-react";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from "react-router-dom";



const ShopByCatagory = () => {
    const [carData, setCarData] = useState([]);
    // const [rating, setRating] = useState(4);

    useEffect(() => {
        fetch("carTab.json")
            .then((res) => res.json())
            .then((data) => setCarData(data))
            .catch((data) => setCarData(data));
    }, []);


    return (
        <div className="container mx-auto">
            <h2 className="text-4xl hexfont text-center mt-20 mb-5 text-blue-600 ">Toy Catagory</h2>
            <Tabs>
                <div className="text-center">
                    <TabList>
                        
                        <Tab>Sports Car</Tab>
                        <Tab>Truck</Tab>
                        <Tab>Police Car</Tab>
                    </TabList>
                </div>

                {Object.keys(carData).map((tabKey, tabIndex) => (
                    <TabPanel key={tabIndex}>
                        <div className="md:flex justify-center gap-10">
                            {carData[tabKey].map((car, carIndex) => (
                                <div key={carIndex}>
                                    <div className="max-w-sm  mx-auto p-2">
                                        <Card className="">
                                            <img className="w-96 h-80" src={car.image} alt={car.name} />
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{car.name}</h5>
                                            <p>Price: {car.price}</p>
                                            <p className="flex items-center">Rating:  <Rating style={{ maxWidth: 100 }} value={car.rating} readOnly /></p>
                                            <div>
                                               
                                                <Link to={`/cardetails/${car._id}`}><Button>View Details</Button></Link>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default ShopByCatagory;