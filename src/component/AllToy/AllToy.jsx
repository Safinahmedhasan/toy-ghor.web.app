import { useLoaderData } from "react-router-dom";


const AllToy = () => {

    const alltoy = useLoaderData();

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl hexfont text-center mt-20 mb-5 text-blue-600 ">Available Toy</h2>

            <p>Total: {alltoy.length}</p>
        </div>
    );
};

export default AllToy;