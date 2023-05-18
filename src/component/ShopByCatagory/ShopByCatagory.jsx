import { Card } from "flowbite-react";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


const ShopByCatagory = () => {
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        fetch("carTab.json")
            .then((response) => response.json())
            .then((data) => setCarData(data))
            .catch((error) => console.log("Error fetching car data:", error));
    }, []);


    return (
        <div className="container mx-auto">
            <h2>Toy Catagory</h2>
            <Tabs>
                <div className="text-center">
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                </div>

                {Object.keys(carData).map((tabKey, tabIndex) => (
                    <TabPanel key={tabIndex}>
                        <div className="flex justify-center gap-10">
                            {carData[tabKey].map((car, carIndex) => (
                                <div key={carIndex}>
                                    <div className="max-w-sm">
                                        <Card>
                                            <img className="w-96" src={car.image} alt={car.name} />
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{car.name}</h5>
                                            <p>Price: {car.price}</p>
                                            <p>Rating: {car.rating}</p>
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