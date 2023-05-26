import { useEffect, useState } from "react";
import ToysRow from "./ToysRow";
import useTitle from "../../hooks/useTitle";

const Toys = () => {
    const [toys,setToys] = useState([]);
    const [searchText,setText] = useState('');
    useTitle('All Toys')
    
    useEffect(()=>{
        fetch('https://doll-server.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])

    const handleSearch=()=>{
        fetch(`https://doll-server.vercel.app/searched/${searchText}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    }

    return (
        <div>
            <div className="my-2 bg-pink-200 rounded-lg">
                <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Type Here With Name"  className="input input-bordered input-error w-full max-w-xs" />
                <button onClick={handleSearch} className="btn btn-outline btn-primary mx-2">Search Now</button>
            </div>
            <div className="overflow-x-auto my-2">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className="bg-pink-400"></th>
                            <th className="bg-pink-400">Name</th>
                            <th className="bg-pink-400">Sub-Category</th>
                            <th className="bg-pink-400">Price</th>
                            <th className="bg-pink-400">Quantity</th>
                            <th className="bg-pink-400">Selller Name</th>
                            <th className="bg-pink-400">View More</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            toys.map(toy=> <ToysRow key={toy._id} toy={toy}></ToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Toys;