
import './AllToyStyle.css'
import { Link } from 'react-router-dom';

const AllToyStyle = ({ toy }) => {

    const { AvailableQuantity, Price, Rating, Seller, SubCategory, description, mail, toyName, toyPhoto, _id } = toy;

    return (
        <div>
           <div className='flex justify-between bg-blue-200 p-5 items-center rounded-3xl mt-3 font-semibold'>
               <p>{toy.Seller}</p> 
               <p>{toy.toyName}</p>
               <p>{toy.SubCategory}</p>
               <p>{toy.Price}</p>
               <p>{toy.AvailableQuantity}</p>
               <Link to={`/singletoy/${_id}`}><button className='bg-blue-400 px-10 py-3 rounded-xl hover:bg-blue-500'>Details</button></Link>
           </div>
        </div>
    );
};

export default AllToyStyle;