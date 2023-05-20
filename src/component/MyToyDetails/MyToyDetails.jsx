import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToyDetails = ({ toy, setMyT, myT }) => {

    const { AvailableQuantity, Price, Rating, Seller, SubCategory, description, mail, toyName, toyPhoto, _id } = toy;


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/toy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="container mx-auto">
            <div className='flex justify-between bg-blue-200 p-5 items-center rounded-3xl mt-3 font-semibold'>
                <p>{toy.toyName}</p>
                <p>{toy.SubCategory}</p>
                <p>{toy.Price}</p>
                <p>{toy.AvailableQuantity}</p>
                <div>

                    <Link to={`/update/${_id}`}> <button className='bg-blue-400 px-10 py-3 rounded-xl hover:bg-blue-500'>Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className='ml-5 bg-red-400 px-10 py-3 rounded-xl hover:bg-blue-500'>Delate</button>
                </div>
            </div>
        </div>
    );
};

export default MyToyDetails;