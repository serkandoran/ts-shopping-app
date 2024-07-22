"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateUserLogin } from '@/redux/features/authSlices'
import { useRouter } from 'next/navigation'
import "./Login.css"

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const signInHandler = ()=>{
    // console.log("sign in buton");
    // dispatch(updateUserLogin({
    //   id: 31,
    //   name: "serkan doran",
    //   isLogged: false
    // }))
    // router.push("/");
  }


  return <div className='login-cotainer py-12'>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button onClick={signInHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
}

export default Login
