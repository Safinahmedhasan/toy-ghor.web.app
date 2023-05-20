import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ToyUpdate = () => {

    const updateToy = useLoaderData();

    const { AvailableQuantity, Price, Rating, Seller, SubCategory, description, mail, toyName, toyPhoto, _id } = updateToy;


    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) =>
        fetch(`http://localhost:5000/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated!',
                        text: 'Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            });





    return (
        <div className="container mx-auto">
            <h2 className="text-4xl hexfont text-center mt-20 mb-5 text-blue-600 ">Update Toy</h2>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-11/12 mx-auto">
                    <div className=" flex">
                        <div className="w-1/2">
                            <span className="text-blue-600 font-bold text-xl">Toy Picture URL</span>
                            <input defaultValue={toyPhoto} className="border border-blue-600 w-full rounded-lg p-3" {...register("toyPhoto")} required />
                        </div>
                        <div className="w-1/2 ml-5">
                            <span className="text-blue-600 font-bold text-xl ">Toy Name</span>
                            <input defaultValue={toyName} className="border border-blue-600 w-full rounded-lg p-3"  {...register("toyName")} required />
                        </div>
                    </div>

                    <div className=" flex mt-5">
                        <div className="w-1/2">
                            <span className="text-blue-600 font-bold text-xl">Seller name</span>
                            <input defaultValue={Seller} className="border border-blue-600 w-full rounded-lg p-3"  {...register("Seller")} required />
                        </div>
                        <div className="w-1/2 ml-5">
                            <span className="text-blue-600 font-bold text-xl">Seller email </span>
                            <input defaultValue={mail} className="border border-blue-600 w-full rounded-lg p-3"
                                {...register("mail", { required: "Email Address is required" })}
                                aria-invalid={errors.mail ? "true" : "false"}
                            />
                        </div>
                    </div>

                    <div className="flex mt-5">
                        <div className="w-1/2">
                            <span className="text-blue-600 font-bold text-xl">Available Quantity</span>
                            <input defaultValue={AvailableQuantity} className="border border-blue-600 w-full rounded-lg p-3" type="number" {...register("AvailableQuantity")} required />
                        </div>
                        <div className="w-1/2 ml-5">
                            <span className="text-blue-600 font-bold text-xl">Sub Category</span>
                            <select defaultValue={SubCategory} className="w-full border-blue-600 rounded-lg p-3" {...register("SubCategory")} required>
                                <option value="superCar">super Car</option>
                                <option value="truck">truck</option>
                                <option value="policeCar">police Car</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <div className="w-1/2">
                            <span className="text-blue-600 font-bold text-xl">Price</span>
                            <input defaultValue={Price} className="border border-blue-600 w-full rounded-lg p-3" type="number" {...register("Price")} required />
                        </div>
                        <div className="w-1/2 ml-5">
                            <span className="text-blue-600 font-bold text-xl">Rating</span>
                            <select className="w-full border-blue-600 rounded-lg p-3" {...register("rating")} required>
                                <option value="5">5</option>
                                <option value="4.5">4.5</option>
                                <option value="4">4</option>
                                <option value="3.5">3.5</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <span className="text-blue-600 font-bold text-xl">Detail description</span>
                        <input defaultValue={description} className=" border border-blue-600 w-full rounded-lg p-3" {...register("description")} required />
                    </div>
                    <input className="w-full bg-blue-600 mt-10 text-white p-5 rounded-xl" type="submit"  />
                </div>


            </form>

        </div>
    );
};

export default ToyUpdate;