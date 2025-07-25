import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { IoMdLogOut } from "react-icons/io";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { auth } from './Firebase/Firebase.init';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOutUser(auth)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout Successful !",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                toast.error("Log Out failed!", {
                    autoClose: 4000,
                    pauseOnHover: true,
                    draggable: true,
                });
                console.log(error)
            });
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-md px-[4%]  md:px-[7%] fixed top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaBars size={20} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to={'/'} className={({ isActive }) =>
                                isActive
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                    : ''
                            }>Home</NavLink>

                            {user ? (
                                <>
                                    <li className='z-1'>
                                        <details>
                                            <summary>My Profile</summary>
                                            <ul className="p-2">
                                                <li className='text-sm'>
                                                    <NavLink
                                                        to="/add-volunteer-need-post"
                                                        className={({ isActive }) =>
                                                            isActive
                                                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                                                : ''
                                                        }
                                                    >
                                                        Add Volunteer Need Post
                                                    </NavLink>
                                                </li>
                                                <li className='text-sm'>
                                                    <NavLink
                                                        to="/manage-my-post"
                                                        className={({ isActive }) =>
                                                            isActive
                                                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                                                : ''
                                                        }
                                                    >
                                                        Manage My Posts
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>

                                    <li>
                                        <NavLink
                                            to="/all-volunteers"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                                    : ''
                                            }
                                        >
                                            All Volunteer Need Posts
                                        </NavLink>
                                    </li>
                                </>
                            ) : null}

                            <NavLink to={'/about'} className={({ isActive }) =>
                                isActive
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                    : ''
                            }>About Us</NavLink>
                            <NavLink to={'/contact'} className={({ isActive }) =>
                                isActive
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                    : ''
                            }>Contact</NavLink>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='max-w-[30%] md:max-w-full' src={logo} alt="" />
                        <div>
                            <h1 className='text-lg md:text-xl lg:text-3xl font-bold'>CareForce</h1>
                            <p className='text-xs md:text-sm'>Serves Better</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:flex lg:items-center lg:text-lg font-500 lg:gap-5">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? ' text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                    : ''
                            }>Home</NavLink>
                        {user ? (
                            <>
                                <li className='z-1'>
                                    <details>
                                        <summary>My Profile</summary>
                                        <ul className="p-2">
                                            <li className='text-sm'>
                                                <NavLink
                                                    to="/add-volunteer-need-post"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                                            : ''
                                                    }
                                                >
                                                    Add Volunteer Need Post
                                                </NavLink>
                                            </li>
                                            <li className='text-sm'>
                                                <NavLink
                                                    to="/manage-my-post"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                                            : ''
                                                    }
                                                >
                                                    Manage My Posts
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </details>
                                </li>

                                <li>
                                    <NavLink
                                        to="/all-volunteers"
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                                : ''
                                        }
                                    >
                                        All Volunteer Need Posts
                                    </NavLink>
                                </li>
                            </>
                        ) : null}


                        <NavLink to={'/about'} className={({ isActive }) =>
                            isActive
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                : ''
                        }>About Us</NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) =>
                            isActive
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'
                                : ''
                        }>Contact</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className={`${user ? "hidden" : ""}`}>
                        <Link to={user ? " " : '/login'}>
                            <button
                                className="bg-linear-to-r from-orange-500 to-red-500 rounded-xl text-white btn mr-3"
                            >
                                {user ? " " : 'Login'}
                            </button>
                        </Link>
                    </div>

                    <div className={`${user ? " " : "hidden"}`}>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="w-12 md:w-18 rounded-full py-2 mr-4">
                                <img src={user?.photoURL} alt="User Image" className="rounded-full w-12 h-12 md:w-18 md:h-18 object-cover" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm -translate-x-20">
                                <li><a className='mx-auto'>{user?.displayName || "User Name"}</a></li>
                                <li><button onClick={() => {
                                    handleSignOut();
                                }} className='btn btn-sm mt-1 rounded-full'>Logout <IoMdLogOut size={18} /></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex'>
                        <label className="swap swap-rotate ml-1">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="dark" />

                            {/* sun icon */}
                            <svg
                                className="swap-off h-8 w-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-8 w-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;