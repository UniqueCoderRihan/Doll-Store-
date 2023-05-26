import { useEffect, useState } from 'react';
import BarbeCart from './BarbeCart';

const BarbeDolls = () => {
    const [carts,setCart] = useState([])
    fetch('https://doll-server.vercel.app/category/barbe')
            .then(res => res.json())
            .then(data => setCart(data))

    return (
        <div className='grid md:grid-cols-3'>
            {
                carts.map(b=> <BarbeCart cart={b}></BarbeCart>)
            }
        </div>
    );
};

export default BarbeDolls;