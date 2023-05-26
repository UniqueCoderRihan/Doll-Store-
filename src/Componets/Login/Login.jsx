import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from 'react-icons/fa';
import useTitle from "../../hooks/useTitle";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('Login')
    const { user, setUser, googleLogin, singInUser } = useContext(AuthContex);
    const [errors, setError] = useState(null)
    const handleLogin = event => {
        event.preventDefault();
        setError(null)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                setUser(result.user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successfully done',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => setError(error.message))


    }
    const handleWithGoogle = () => {
        googleLogin()
            .then(result => {
                setUser(result.user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Register Successfully done',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className="hero min-h-screen bg-pink-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login Here !</h1>
                    <p className="py-6">If You Want to grow your activity,You need to must Login Our Community!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-100">
                    <div className='card-body'>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <div className="flex">
                                        <p className="label-text-alt link link-hover">Are you new to? <span><Link to='/Register'>Register</Link></span> </p>
                                        <p className="label-text-alt link link-hover ml-12">Forget Password?</p>
                                    </div>
                                </label>
                            </div>
                            <input type="submit" value="login" className='btn btn-primary w-full' />
                        </form>

                        <p className='text-center'>Or</p>
                        <div>
                            <button onClick={handleWithGoogle} className='btn btn-primary btn-outline w-full'> <FaGoogle className="mx-3"></FaGoogle> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;