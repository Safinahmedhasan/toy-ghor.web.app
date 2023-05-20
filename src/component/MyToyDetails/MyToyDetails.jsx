

const MyToyDetails = ({ toy }) => {

    const { AvailableQuantity, Price, Rating, Seller, SubCategory, description, mail, toyName, toyPhoto, _id } = toy;

    return (
        <div className="container mx-auto">
            <div className='flex justify-between bg-blue-200 p-5 items-center rounded-3xl mt-3 font-semibold'>
                <p>{toy.toyName}</p>
                <p>{toy.SubCategory}</p>
                <p>{toy.Price}</p>
                <p>{toy.AvailableQuantity}</p>
                <div>
                    <button className='bg-blue-400 px-10 py-3 rounded-xl hover:bg-blue-500'>Update</button>
                    <button className='ml-5 bg-blue-400 px-10 py-3 rounded-xl hover:bg-blue-500'>Delate</button>
                </div>
            </div>
        </div>
    );
};

export default MyToyDetails;