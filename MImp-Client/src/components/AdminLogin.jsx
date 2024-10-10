import React from 'react'
import Google from '../assets/img/google.png'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { CircleX } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminLogin = () => {
    const username = import.meta.env.VITE_USERNAME;
    const password = import.meta.env.VITE_PASSWORD;

    const navigate = useNavigate();
    const usernameref = useRef(null);
    const passwordref = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            usern: usernameref.current.value,
            passw: passwordref.current.value
        };
        try {
            console.log(data);
            if (data.usern === username && data.passw === password) {
                toast.success('Login Successful');
                setTimeout(() => {
                    navigate('/admin');
                }, 2000);
            } else {
                toast.error('Invalid Credentials');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="h-[90vh] w-screen flex justify-center absolute items-center z-50">
                <div className="h-100 w-[370px] pb-5 flex flex-col justify-center items-center bg-white rounded-[30px] shadow-xl">
                    <div className="w-full flex justify-end align-top">
                        <CircleX onClick={() => navigate('/')} />
                    </div>
                    <form onSubmit={handleLogin} className="flex flex-col justify-center w-[80%] h-[80%] rounded-md items-center gap-4">
                        <h1 className="text-blue-600 text-2xl font-medium">Admin Login</h1>
                        <input type="text" ref={usernameref} className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Username" />
                        <input type="password" ref={passwordref} className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="password" />
                        <button type="submit" className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600" >Login</button>
                        <button type="submit" className="h-12 bg-slate-50 rounded-full w-[80%] p-2 font-serif flex justify-center gap-4 items-center" ><img src={Google} /> Continue with Google</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminLogin