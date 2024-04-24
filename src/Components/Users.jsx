import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";


const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        fetch(`https://coffee-store-server-mu-eight.vercel.app/user/${id}`, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                console.log("data deleted successfully.");

                const remainingData = users.filter(user=> user._id !== id);
                setUsers(remainingData);
                console.log("remaining Data",remainingData)
            }
        })
    }
    return (
        <div>
            <Header></Header>
            <h2>users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>LastLogged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id} className="hover">
                                <th>2</th>
                                <td>{user?.email}</td>
                                <td>{user?.createdAt}</td>
                                <td>{user?.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;