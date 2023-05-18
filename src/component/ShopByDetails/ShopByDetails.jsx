import { useLoaderData } from "react-router-dom";


const ShopByDetails = () => {

    const carDetails = useLoaderData();
    console.log(carDetails);

    return (
        <div>
            <h2>this is</h2>
        </div>
    );
};

export default ShopByDetails;