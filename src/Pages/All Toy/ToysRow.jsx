import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContex} from '../../AuthProvider/AuthProvider';

const ToysRow = ({ toy }) => {
    const { name, seller, price, quantity, _id, category } = toy;
    const {user} = useContext(AuthContex);
    const handleTost = () => {
        console.log('clicked');
        if(!user){
            let timerInterval

        Swal.fire({
            title: 'Login Frist!',
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
        <tr>
            <th className="bg-pink-200">{ }</th>
            <td className="font-semibold bg-pink-200">{name}</td>
            <td className="bg-pink-200">{category}</td>
            <td className="bg-pink-200">${price}</td>
            <td className="bg-pink-200">{quantity}</td>
            <td className="bg-pink-200">{seller}</td>
            <td className="bg-pink-200"> <button onClick={handleTost} className="btn btn-outline"> <Link to={`/toy/${_id}`} >View</Link> </button> </td>
        </tr>
    );
};

export default ToysRow;