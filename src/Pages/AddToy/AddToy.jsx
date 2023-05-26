import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContex } from '../../AuthProvider/AuthProvider'
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
    
    const { user } = useContext(AuthContex);
    // console.log(user);
    useTitle('Add New Toy')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.name.value;
        const details = form.message.value;
        const email = form.email.value;
        const price = form.price.value;
        const toyImg = form.toyImg.value;
        const sellerName = form.sellerName.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const category = form.selected.value;
        // console.log(category);
        const item = {
            image:toyImg,
            price:price,
            rating:ratings,
            seller:sellerName,
            sellerEmail:email,
            quantity:quantity,
            details:details,
            name:toyName,
            category:category
        }
        form.reset()
        // console.log(item);
        fetch('https://doll-server.vercel.app/toys', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'ThankYou! Toy Added!!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please Try Again Letter',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="bg-pink-200 rounded-lg">
            <h2 className="text-3xl text-center my-2">Add Toy:</h2>

            <div className="hero min-h-screen bg-pink-200 ">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name="name" placeholder=" Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl Toy</span>
                            </label>
                            <input type="text" placeholder="Toy image Url " name="toyImg" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="number" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" defaultValue={user?.email} required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" placeholder="Seller Name" name="sellerName" defaultValue={user?.displayName} required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" placeholder="Available Quantity" name="quantity" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" placeholder="Ratings" name="ratings" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose Sub Category</span>
                            </label>
                            <select className="select select-accent input input-bordered" name="selected">
                                <option disabled selected>Chose Category</option>
                                <option>BabyDolls</option>
                                <option>AmericanDolls</option>
                                <option>BarbeDolls</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-3  ">
                        <textarea name="message" rows="8" cols="50" placeholder="Write Details About Toy ">
                        </textarea>
                    </div>
                    <div className="form-control mt-6 ">
                        <input type="submit" value="Add Toy!" className="btn btn-primary w-1/6 btn-block mx-auto bg-pink-500" />
                    </div>
                </form>
            </div>
        </div>

    )
}
export default AddToy;