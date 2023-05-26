
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Details = () => {
    const item = useLoaderData();
    console.log(item);
    const { name, image, seller, sellerEmail, category, details, rating, quantity, price } = item;
    useTitle(` ${name} Deatils`)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} className='w-1/4' alt="One Image about Dolls" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{category}</div>
                    </h2>
                    <p >{details}</p>
                    <p className='font-semibold'>Price:${price}</p>
                    <p className='font-semibold'>Quantity: {quantity}</p>
                    <p className='font-semibold'>Seller: {seller}</p>
                    <p className='font-semibold'>Seller Email: {sellerEmail}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-secondary">Dolls Category</div>
                        <div className="badge badge-secondary">{category}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;