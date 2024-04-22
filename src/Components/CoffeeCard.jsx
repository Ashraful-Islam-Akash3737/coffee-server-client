

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card card-side rounded-xl shadow-xl px-4 py-8 bg-[#F5F4F1]">
            <figure><img src={photo} alt={name} /></figure>
            <div className="flex items-center justify-between w-full p-4">
                <div className="">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="join join-vertical space-y-4">
                    <button className="btn text-white bg-[#D2B48C] px-2 py-0 rounded-md">View</button>
                    <button className="btn text-white bg-[#3C393B] px-2 py-0 rounded-md">Edit</button>
                    <button className="btn text-white bg-[#EA4744] px-2 py-0 rounded-md">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;