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
        <div>
            <div onClick={() => handleTabClick("superCar")}
                className={`tab tab2 superCar ${activeTab == "superCar" ? "excss" : ""
                    }`}
            >
                Super Car
            </div>


            <div onClick={() => handleTabClick("truck")}
                className={`tab tab2 truck ${activeTab == "truck" ? "excss" : ""
                    }`}
            >
                Truck
            </div>

            <div onClick={() => handleTabClick("policeCar")}
                className={`tab tab2 policeCar ${activeTab == "policeCar" ? "excss" : ""
                    }`}
            >
                Police Car
            </div>

            <div>
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