import { useEffect, useState } from 'react';
import './TabC.css'
import SignleTab from '../SignleTab/SignleTab';

const TabC = () => {
    const [tab, setTab] = useState([])
    const [activeTab, setActiveTab] = useState("superCar");
    const [result, setResult] = useState([]);
    console.log(result);



    useEffect(() => {
        fetch("http://localhost:5000/toy")
            .then((res) => res.json())
            .then((result) => {
                setTab(result);
            })
    }, [])

    useEffect(() => {
        const filteredTab = tab?.filter((ta) => ta.SubCategory === activeTab);
        setResult(filteredTab);
    }, [tab, activeTab]);



    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl hexfont text-center mt-20 text-blue-600 '> Category</h2>
            <div className='flex justify-center mt-10 mb-10 '>
                <div onClick={() => handleTabClick("superCar")}
                    className={`text-white p-5 bg-blue-600 mr-5 border-none superCar ${activeTab == "superCar" ? "excss" : ""
                        }`}
                >
                    Super Car
                </div>


                <div onClick={() => handleTabClick("truck")}
                    className={`text-white p-5 bg-blue-600 mr-5 border-none  truck ${activeTab == "truck" ? "excss" : ""
                        }`}
                >
                    Truck
                </div>

                <div onClick={() => handleTabClick("policeCar")}
                    className={`text-white p-5 bg-blue-600 mr-5 border-none  policeCar ${activeTab == "policeCar" ? "excss" : ""
                        }`}
                >
                    Police Car
                </div>
            </div>

            <div className='grid grid-cols-3 gap-10'>
                {
                    result?.map((ta) => (
                        <SignleTab

                            key={ta._id}
                            ta={ta}

                        ></SignleTab>
                    ))
                }
            </div>

        </div>
    );
};

export default TabC;