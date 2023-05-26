
import { useContext, useState } from 'react';
import { Link, Navigate, redirect } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const {createUser,user,setUser,loading,googleLogin} = useContext(AuthContex)
    const [errors,setError] = useState(null)
    const handleRegister=event=>{
        setError(null)
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email);
        createUser(email,password)
        .then(result=>{
            setUser(result.user)
            setError(null)
            form.reset()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Register Successfully done',
                showConfirmButton: false,
                timer: 1500
              })
            
        })
        .catch(error=>setError(error.message))
    }
    const handleWithGoogle = ()=>{
        googleLogin()
        .then(result=>{
            setUser(result.user);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Register Successfully done',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error=>setError(error.message))
    }
    
    return (
        <div className="hero min-h-screen bg-pink-200 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Welcome Toy Store!</h1>
                    <p className="py-6">Thanks for your Joining Interest. We Hope You Will be Happy!!</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-pink-100">
                    <div className='card-body'>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Your Full Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' required placeholder="Your Photo Url" className="input input-bordered" />
                            </div>
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
                                    <div>
                                    <p className="label-text-alt link link-hover">Alredy have an Account? <span><Link to='/login'>Login</Link></span> </p>
                                    </div>
                                </label>
                            </div>
                            <input type="submit" value="Register" className='btn btn-primary w-full' />
                        </form>
                        <p className='text-center'>Or</p>
                        {
                            errors && <p>{errors}</p>
                        }
                        <div>
                            <button onClick={handleWithGoogle} className='btn btn-primary btn-outline w-full'> <FaGoogle className='mx-3'></FaGoogle> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;