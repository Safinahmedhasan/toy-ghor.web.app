import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";


const ShopByCatagory = () => {
    const [carData, setCarData] = useState([]);
    
    console.log(carData);

    useEffect(() => {
        fetch('car.json')
          .then((response) => response.json())
          .then((data) => setCarData(data));
      }, []);


    return (
        <div className="container mx-auto mt-20">
            <h2 className='text-4xl hexfont text-center mt-16 mb-10 text-blue-600 '>Shop by category</h2>
            <div className="w-7/12 mx-auto">
                <Tabs.Group
                    aria-label="Full width tabs"
                    style="fullWidth"
                >
                    <Tabs.Item title="Sports Car">
                        Profile content
                    </Tabs.Item>
                    <Tabs.Item title="Truck">
                        Dashboard content
                    </Tabs.Item>
                    <Tabs.Item title="Police Car">
                        Settings content
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    );
};

export default ShopByCatagory;