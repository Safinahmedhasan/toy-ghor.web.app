import { useLoaderData } from "react-router-dom";
import AllToyStyle from "../AllToyStyle/AllToyStyle";
import { useEffect, useState } from "react";



const AllToy = () => {

    const allToy = useLoaderData();
    const [searchText, setSearchText] = useState("");


    useEffect(() =>{
        fetch(`http://localhost:5000/toySearchName/${searchText}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    },[])

    const slicedProducts = allToy.slice(0, 4);
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl hexfont text-center mt-20 mb-5 text-blue-600 ">Available Toy</h2>

            <div>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" />

            </div>

            <p>Total: {allToy.length}</p>

            <div>
                <div className="flex justify-between container mx-auto font-bold p-5 bg-blue-400 rounded-lg">
                    <h2>Seller</h2>
                    <h2>Toy</h2>
                    <h2>Category</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Details</h2>
                </div>

                {slicedProducts.map((toy) => (
                    <AllToyStyle
                        key={toy._id}
                        toy={toy}
                    />
                ))}
            </div>


        </div>
    );
};

export default AllToy;