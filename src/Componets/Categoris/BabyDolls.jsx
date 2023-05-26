import { useEffect, useState } from "react";
import BarbeCart from "./BarbeCart";

const BabyDolls = () => {
    const [baby,setbaby] = useState([])

    useEffect(()=>{
        fetch('https://doll-server.vercel.app/category/baby')
        .then(res=>res.json())
        .then(data=>setbaby(data))
    },[])

    return (
        <div className="grid md:grid-cols-3">
            {
                baby.map(b=> <BarbeCart key={b._id} cart={b}></BarbeCart>)
            }
        </div>
    );
};

export default BabyDolls;