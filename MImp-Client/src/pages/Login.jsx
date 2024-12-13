import React from 'react'
import Google from '../assets/img/google.png'
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { CircleX } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginUser } from '../services/AuthServices';
import { Spin } from 'antd';
import { storeUserdata } from '../services/storageServices';
import { useAuth } from '../Context/AuthContext';




const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const emailref = useRef(null);
  const passwordref = useRef(null);



  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: emailref.current.value,
      password: passwordref.current.value
    };
    try {
      if (data.email === '' || data.password === '') {
        toast.error('All fields are required');
        setLoading(false);
        return;
      }
      const res = await LoginUser(data);
      if (res.data.message === 'User does not exist') {
        toast.error('User does not Exist');
      }
      if (res.data.message === 'Incorrect Password') {
        toast.error('Incorrect Password');
      }
      if (res.status === 201) {
        console.log(res);
        login();
        storeUserdata(res.data);
        toast.success('Login Successful');
        setLoading(false);
        setTimeout(() => {
          navigate('/endoutput');
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };



  return (
    <>
      <ToastContainer />
      <div className="h-full w-screen flex justify-center absolute items-center z-50 bg-slate-300">
        {Loading ? <Spin /> : (
          <div className="h-100 w-[370px] pb-5 flex flex-col justify-center items-center bg-slate-100 rounded-[30px] shadow-xl m-7">
            <div className="w-full flex justify-end align-top pt-3 pr-3">
              <CircleX onClick={() => navigate('/')} />
            </div>
            <form onSubmit={handleLogin} className="flex flex-col justify-center w-[80%] h-[80%] rounded-md items-center gap-4">
              <h1 className="text-blue-600 text-2xl font-medium">Login Form</h1>
              <input type="email" ref={emailref} className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Email" />
              <input type="password" ref={passwordref} className="p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="password" />
              <button type="submit" className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600" >Login</button>
              <button type="submit" className="h-12 bg-slate-50 rounded-full w-[80%] p-2 font-serif flex justify-center gap-4 items-center" ><img src={Google} /> Continue with Google</button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default Login