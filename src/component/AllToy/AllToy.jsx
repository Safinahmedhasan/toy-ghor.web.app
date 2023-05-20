import { useEffect, useState } from "react";
import AllToyStyle from "../AllToyStyle/AllToyStyle";
import { Button } from "flowbite-react";




const AllToy = () => {
    const [allToy, setAllToy] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(res => res.json())
            .then(data => {
                setAllToy(data);
            })
    }, []);

    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToy(data);
            })
    }


    const displayedToys = allToy.slice(0, 20);



    return (
        <div className="container mx-auto">
            <h2 className="text-4xl hexfont text-center mt-20 mb-5 text-blue-600 ">Available Toy</h2>

            <div className="flex justify-end items-center mb-5">
                <input placeholder="Search Toy" className="border border-blue-600 rounded-lg mr-3" onChange={(e) => setSearchText(e.target.value)} type="text" />{""}
                <Button onClick={handleSearch}>Search</Button>
            </div>

            <div>
                <div className="flex justify-between container mx-auto font-bold p-5 bg-blue-400 rounded-lg">
                    <h2>Seller</h2>
                    <h2>Toy</h2>
                    <h2>Category</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Details</h2>
                </div>


            </div>

            {
                displayedToys.map(toy => <AllToyStyle
                    key={toy._id}
                    toy={toy}
                ></AllToyStyle>)
            }
        </div>
    );
};

export default AllToy;