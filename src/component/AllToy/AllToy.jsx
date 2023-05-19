import { useLoaderData } from "react-router-dom";
import AllToyStyle from "../AllToyStyle/AllToyStyle";



const AllToy = () => {

    const allToy = useLoaderData();
    console.log(allToy);

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl hexfont text-center mt-20 mb-5 text-blue-600 ">Available Toy</h2>

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
                {
                   allToy.map(toy => <AllToyStyle
                    key={toy._id}
                    toy={toy}
                   ></AllToyStyle>)
                }
            </div>

           
        </div>
    );
};

export default AllToy;