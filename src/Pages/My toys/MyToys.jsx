import { useContext, useEffect, useState } from "react";
import { AuthContex } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle'
import ToyRow from "./ToyRow";
import Swal from "sweetalert2";
import { data } from "autoprefixer";

const MyToys = () => {
    const { user, loading } = useContext(AuthContex);
    useTitle('My Toys')

    const [toys, setToys] = useState([]);
    const url = (`https://doll-server.vercel.app/mytoy?email=${user?.email}`);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    const handleRemove = id => {
        Swal.fire({
            title: 'Are you sure want to remove?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://doll-server.vercel.app/toy/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                const remaining = toys.filter(toy => toy._id !== id);
                setToys(remaining)

                Swal.fire(
                    'Deleted!',
                    'Your Toy has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Remove
                            </th>
                            <th>Name</th>
                            <th>Update</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyRow key={toy._id} toy={toy} handleRemove={handleRemove}></ToyRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;