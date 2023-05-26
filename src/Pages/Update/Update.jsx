import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';


const Update = () => {
    useTitle('Update Toy')
    const toy = useLoaderData();
    const {_id, quantity, price, rating, details, name, image } = toy;

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const details = form.details.value;
        
        fetch(`https://doll-server.vercel.app/update/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({price:price,quantity:quantity,details:details})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Success!',
                    text: 'ThankYou! Toy Updated!!',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            }
        })
    }

    return (
        <div className='bg-pink-300 rounded-lg'>
            <h3 className='text-3xl text-center font-semibold my-2 p-2'>Update Your Information About {name} </h3>
            <div>
                <form onSubmit={handleUpdate}>
                    <div className='grid md:grid-cols-2 gap-3 m-2'>
                        <div className="form-control  ">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" required name="quantity" placeholder=" quantity" defaultValue={quantity} className="input bg-pink-200 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" required name="price" placeholder=" price" defaultValue={price} className="input bg-pink-200 input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" required name="details" placeholder=" Details" defaultValue={price} className="input bg-pink-200 input-bordered" />
                        </div>

                    </div>
                    <div className=''>
                        <input type="submit" className='btn btn-sm btn-primary' value="Update Information" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;