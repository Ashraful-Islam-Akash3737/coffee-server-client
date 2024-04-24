import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        // send data to the server
        fetch(`https://coffee-store-server-mu-eight.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log("coffee data", data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="my-10">
            <Header></Header>
            <div className="text-center mb-8">
                <h3 className="text-3xl font-extrabold text-[#374151]">Update This Coffee</h3>
            </div>
            {/* form  */}
            <div className=" p-2">
                <form onSubmit={handleUpdateCoffee} className="mx-auto md:w-11/12 lg:w-10/12 bg-white p-2 md:p-4 lg:p-8 rounded-xl space-y-6">
                    {/* form name and quantity row 1*/}
                    <div className="md:flex justify-between items-center gap-6">
                        {/* name */}
                        <div className="join w-full md:w-1/2 mb-4 md:mb-0">
                            <button className="btn join-item rounded-r-full p-2 md:p-4">Coffee Name</button>
                            <input type="text" name="name" className="input input-bordered join-item w-full" defaultValue={name} />

                        </div>
                        {/* quantity */}
                        <div className="join w-full md:w-1/2 ">
                            <button className="btn join-item rounded-r-full p-2 md:p-4">Available Quantity</button>
                            <input type="text" name="quantity" className="input input-bordered join-item w-full" defaultValue={quantity} />

                        </div>
                    </div>
                    {/* form supplier and taste row 2*/}
                    <div className="md:flex justify-between items-center gap-6">
                        {/* supplier */}
                        <div className="join w-full md:w-1/2 mb-4 md:mb-0">
                            <button className="btn join-item rounded-r-full p-2 md:p-4">Supplier Name</button>
                            <input type="text" name="supplier" className="input input-bordered join-item w-full" defaultValue={supplier} />

                        </div>
                        {/* taste */}
                        <div className="join w-full md:w-1/2 ">
                            <button className="btn join-item rounded-r-full p-2 md:p-4">Taste</button>
                            <input type="text" name="taste" className="input input-bordered join-item w-full" defaultValue={taste} />

                        </div>
                    </div>
                    {/* form category and details row 3*/}
                    <div className="md:flex justify-between items-center gap-6">
                        {/* category */}
                        <div className="join w-full md:w-1/2 mb-4 md:mb-0">
                            <button className="btn join-item rounded-r-full p-2 md:p-4">Category</button>
                            <input type="text" name="category" className="input input-bordered join-item w-full" defaultValue={category} />

                        </div>
                        {/* details */}
                        <div className="join w-full md:w-1/2 ">
                            <button className="btn join-item rounded-r-full p-2 md:p-4">Details</button>
                            <input type="text" name="details" className="input input-bordered join-item w-full" defaultValue={details} />

                        </div>
                    </div>
                    {/* form photo url row 4*/}
                    <div className="">
                        {/* photo url */}
                        <div className="join w-full mb-4 md:mb-0">
                            <button className="btn join-item rounded-r-full p-2 md:p-4">Photo URL</button>
                            <input type="text" name="photo" className="input input-bordered join-item w-full" defaultValue={photo} />

                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] text-[#331A15] text-xl" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;