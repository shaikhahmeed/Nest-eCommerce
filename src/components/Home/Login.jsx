import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userAccountInfo } from '../../slice/userSlice';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData,setUserData]= useState({
     username:"",
     password:"",
   });



   const handlelogin=async(e)=>{
    e.preventDefault();
      // localStorage.setItem('userData',JSON.stringify(logedUserInfo));

    const options = {
      method: 'POST',
      url: 'https://api.freeapi.app/api/v1/users/login',
      headers: {
        accept: 'application/json', 
        'content-type': 'application/json',
      },
      data: userData,
    };
    
    try {
      const  res  = await axios.request(options);
      console.log(res.data.data.accessToken)
      localStorage.setItem("token", res.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      dispatch(userAccountInfo(res.data.data.user))

      setTimeout(()=>{
        navigate("/")
      },2000);

      toast.success(res.data.message);

    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error.response.data.errors);
    }
   };

return (
<section className='h-screen flex items-center justify-center'>
<ToastContainer
position="top-right"
autoClose={5000}
rtl={false}
theme="dark"
/>
<div
  className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
>
  <div
    className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40"
  >
    <h3
      className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased"
    >
      Log in
    </h3>
  </div>
  <div className="flex flex-col gap-4 p-6">
    <div className="relative h-11 w-full min-w-[200px]">
      <input
      onChange={(e)=>setUserData((prev)=>({
        ...prev,
        username:e.target.value,
       }))
      }
        placeholder=""
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
      >
        User Name
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
      onChange={(e)=>setUserData((prev)=>({
        ...prev,
        password:e.target.value,
       }))
      }
        placeholder=""
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
      >
        Password
      </label>
    </div>
    <div className="-ml-2.5">
    </div>
  </div>
  <div className="p-6 pt-0">
    <button
     onClick={handlelogin}
      data-ripple-light="true"
      type="button"
      className="block w-full select-none rounded-lg cursor-pointer bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      Sign In
    </button>
    <p
      className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased"
    >
      Don't have an account?
      <Link
        className="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
        to="/registration"
      >
        Sign up
      </Link>
    </p>
  </div>
</div>
</section>
  )
}

export default Login