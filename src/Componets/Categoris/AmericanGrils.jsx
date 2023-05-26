import{ useEffect, useState } from 'react';
import BarbeCart from './BarbeCart';

const AmericanGrils = ({cart}) => {
    const [carts,setCart] = useState([])
    useEffect(()=>{
        fetch('https://doll-server.vercel.app/category/AmericanDolls')
        .then(res=>res.json())
        .then(data=>setCart(data))
    },[])

    return (
        <div className='grid md:grid-cols-3'>
            {
                carts.map(b=> <BarbeCart key={b._id} cart={b}></BarbeCart>)
            }
        </div>
    );
};

export default AmericanGrils;