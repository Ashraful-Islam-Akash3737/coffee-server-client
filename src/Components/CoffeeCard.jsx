import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee , coffees, setCoffees}) => {
    const { _id, name, quantity, supplier, taste, category, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("delete confirmed.", data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="card card-side flex flex-col md:flex-row rounded-xl shadow-xl px-4 py-8 bg-[#F5F4F1]">
            <figure><img src={photo} alt={name} /></figure>
            <div className="flex flex-col md:flex-row items-center justify-between w-full p-4">
                <div className="">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                </div>
                <div className="join items-center  gap-6 flex-row md:flex-col ">
                    <button className="btn text-white bg-[#D2B48C] px-2 py-0 rounded-md">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn text-white bg-[#3C393B] px-2 py-0 rounded-md">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn text-white bg-[#EA4744]  rounded-md">X</button>
                </div>
            </div>
        </div>
    );
};


CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,
}
export default CoffeeCard;