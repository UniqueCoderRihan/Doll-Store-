import Rating from "react-rating";
import { FaStar, FaRegStar } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";
const BarbeCart = ({ cart }) => {
    console.log(cart);
    const { price, image, rating, name, category, _id } = cart || {};
    const { user } = useContext(AuthContex);
    const handleTost = () => {
        console.log('clicked');
        if (!user) {
            let timerInterval

            Swal.fire({
                title: 'You have to log in first to view details',
                html: 'It will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        }
    }
    return (
        <div className="my-2">
            <div className="card card-compact w-2/3 bg-pink-100 shadow-xl">
                <figure><img src={image} className="w-1/2" alt="Doll Photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="font-semibold">Sub-Category: {category}</p>
                    <p className="font-semibold">Price:${price}</p>
                    <Rating
                        readonly
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                    ></Rating>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm"> <Link to={`/toy/${_id}`} onClick={handleTost}>  View Details</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarbeCart;