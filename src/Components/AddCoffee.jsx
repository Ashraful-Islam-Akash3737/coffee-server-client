import Swal from 'sweetalert2'
import Header from './Header';


const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // send data to the server
        fetch('https://coffee-store-server-mu-eight.vercel.app/coffee', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log("coffee data", data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="px-4 md:px-8 py-8 md:py-16">
            <Header></Header>
            <div className="bg-[#F4F3F0] py-8 md:px-8 rounded-xl mx-auto">
                <div className="text-center space-y-8 mb-8">
                    <h3 className="text-3xl font-extrabold text-[#374151]">Add New coffee</h3>
                    <p className="md:w-8/12 w-11/12 mx-auto text-[#1B1A1A7A]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                {/* form  */}
                <div className=" p-2">
                    <form onSubmit={handleAddCoffee} className="mx-auto md:w-11/12 lg:w-10/12 bg-white p-2 md:p-4 lg:p-8 rounded-xl space-y-6">
                        {/* form name and quantity row 1*/}
                        <div className="md:flex justify-between items-center gap-6">
                            {/* name */}
                            <div className="join w-full md:w-1/2 mb-4 md:mb-0">
                                <button className="btn join-item rounded-r-full p-2 md:p-4">Coffee Name</button>
                                <input type="text" name="name" className="input input-bordered join-item w-full" placeholder="Coffee Name" />

                            </div>
                            {/* quantity */}
                            <div className="join w-full md:w-1/2 ">
                                <button className="btn join-item rounded-r-full p-2 md:p-4">Available Quantity</button>
                                <input type="text" name="quantity" className="input input-bordered join-item w-full" placeholder="Available Quantity" />

                            </div>
                        </div>
                        {/* form supplier and taste row 2*/}
                        <div className="md:flex justify-between items-center gap-6">
                            {/* supplier */}
                            <div className="join w-full md:w-1/2 mb-4 md:mb-0">
                                <button className="btn join-item rounded-r-full p-2 md:p-4">Supplier Name</button>
                                <input type="text" name="supplier" className="input input-bordered join-item w-full" placeholder="Supplier Name" />

                            </div>
                            {/* taste */}
                            <div className="join w-full md:w-1/2 ">
                                <button className="btn join-item rounded-r-full p-2 md:p-4">Taste</button>
                                <input type="text" name="taste" className="input input-bordered join-item w-full" placeholder="Taste" />

                            </div>
                        </div>
                        {/* form category and details row 3*/}
                        <div className="md:flex justify-between items-center gap-6">
                            {/* category */}
                            <div className="join w-full md:w-1/2 mb-4 md:mb-0">
                                <button className="btn join-item rounded-r-full p-2 md:p-4">Category</button>
                                <input type="text" name="category" className="input input-bordered join-item w-full" placeholder="Category" />

                            </div>
                            {/* details */}
                            <div className="join w-full md:w-1/2 ">
                                <button className="btn join-item rounded-r-full p-2 md:p-4">Details</button>
                                <input type="text" name="details" className="input input-bordered join-item w-full" placeholder="Details" />

                            </div>
                        </div>
                        {/* form photo url row 4*/}
                        <div className="">
                            {/* photo url */}
                            <div className="join w-full mb-4 md:mb-0">
                                <button className="btn join-item rounded-r-full p-2 md:p-4">Photo URL</button>
                                <input type="text" name="photo" className="input input-bordered join-item w-full" placeholder="Photo URL" />

                            </div>
                        </div>
                        <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C] text-[#331A15] text-xl" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddCoffee;