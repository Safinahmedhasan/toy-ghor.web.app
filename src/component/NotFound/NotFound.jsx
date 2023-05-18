import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="all-item">
                <img className='w-96' src="https://i.ibb.co/L9yp9RH/a8121abee959e18cbad25ad4046f76d8.gif" alt="" />
            </div>
            <div className='text-center mb-20'>
                <h2 className='text-4xl text-blue-600 font-bold text'>WE ARE SORRY, PAGE NOT FOUND!</h2>
                <p className='text-1xl font-semibold mt-5 mb-5'>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</p>
                <Link to="/"> <button className="btn btn-outline btn-warning">BACK TO HOME</button></Link>
            </div>
        </div>
    );
};

export default NotFound;