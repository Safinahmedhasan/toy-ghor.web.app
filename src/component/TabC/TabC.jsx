import { useEffect, useState } from 'react';
import './TabC.css'

const TabC = () => {
    const [tab , setTab] = useState([])
    console.log(tab);
    const [activeTab, setActiveTab] = useState("remote");


    useEffect(()=> {
        fetch("http://localhost:5000/toy")
        .then((res) => res.json())
        .then((result) => {
            setTab(result);
        })
    }, [])



    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
    }
    return (
        <div>
           <div onClick={() => handleTabClick("remote")}
           className={`tab tab2 remote ${
            activeTab == "remote" ? "excss" : ""
           }`}
           >
            remote
           </div>


            <div onClick={() => handleTabClick("offline")}
           className={`tab tab2 offline ${
            activeTab == "offline" ? "excss" : ""
           }`}
           >
            offline
           </div>

            <div onClick={() => handleTabClick("java")}
           className={`tab tab2 java ${
            activeTab == "java" ? "excss" : ""
           }`}
           >
            offline
           </div>
        </div>
    );
};

export default TabC;