import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyToyDetails from "../MyToyDetails/MyToyDetails";
import useTitle from "../Hooks/UseTitle";


const MyToy = () => {

    const [myT, setMyT] = useState({});
useTitle('My Toy')
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyT(data);
            });
    }, [user]);


    return (
        <div>
            <h2 className="text-4xl hexfont text-center mt-20 mb-5 text-blue-600 '">My Toy</h2>
            {Array.isArray(myT) ? (
                myT.map((toy) => (
                    <MyToyDetails key={toy._id} toy={toy} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MyToy;