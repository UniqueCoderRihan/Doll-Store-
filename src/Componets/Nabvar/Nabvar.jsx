
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Nabvar = () => {
    const { user, logOut } = useContext(AuthContex);
    console.log(user);
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    const items = <>
        <Link className='mx-3'>Home</Link>
        <Link className='mx-3' to='/blogs'>Blog</Link>
        <Link className='mx-3'to='toys'>All Toys</Link>
        {
            user &&
            <>
                <Link className='mx-3' to='mytoys'>My Toys</Link>
                <Link to='/addtoy'>Add Toys</Link>
            </>
        }
    </>
    return (
        <div className="navbar bg-pink-200 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>

                <div className='flex'>
                    <Link>
                        <img src="https://i.ibb.co/hs5J3SP/png-transparent-doll-toy-doll-miscellaneous-child-girls-thumbnail.png" className='w-10 rounded' alt="" />

                    </Link>
                    <h2 className='text-2xl mx-2 font-semibold'>Toy Store</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className="w-24 rounded-full">
                        <img title={user.displayName} className="w-10 rounded-full" src={user.photoURL}/>
                    </div>
                }
                {user ?
                    <button className="btn btn-outline btn-warning" onClick={handleLogout}>Logout</button> :
                    <button className="btn btn-outline btn-warning"><Link to='/login'>Login</Link> </button>}
            </div>

        </div>
    );
};

export default Nabvar;