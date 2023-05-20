import { Button, Card } from "flowbite-react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'







const SignleTab = ({ ta }) => {

    const { rating, Price, toyPhoto, toyName, _id } = ta || {}

    const { user } = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/';

    const handleDetails = () => {
        {
            user ? Navigate(from, { replace: true }) : Swal.fire({
                title: 'Login!',
                text: 'Please Login To show Details',
                icon: 'warning',
                confirmButtonText: 'Login'
            })
        }
    }

    return (
        <div>
            <div className="ml-5 mt-5">
                <Card>
                    <img className="h-80 w-96" src={toyPhoto} alt="" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {toyName}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        price: ${Price}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 flex">
                        Rating: {rating}
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    </p>
                    <Link to={`/tabDetails/${_id}`}><Button onClick={handleDetails}>Details</Button></Link>
                </Card>
            </div>
        </div>
    );
};

export default SignleTab;