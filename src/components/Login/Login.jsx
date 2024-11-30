import React from 'react'
import Loginimg from '../../assets/login.png'
import Google from '../../assets/google.png'
import Wavelabel from '../Wavelabel/Wavelabel'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    
    <section className='md:flex'>

      <div className='md:w-[60%] md:pt-[220px] pt-8 md:ps-[260px] ps-4 pe-4 md:pe-0 mb-12 md:mb-0'>

        <h2 className='text-darkBlueTwo font-opnesans font-bold md:text-[34px] text-3xl mb-8'>Login to your account!</h2>

        <div className='flex mb-14 cursor-pointer gap-[10px] ps-[30px] py-[22px] border-[1px] border-darkBlueTwo border-opacity-30 w-[240px] rounded-[9px] active:scale-[0.98]'>
            <img src={Google} alt="" />
            <p className='text-darkBlueTwo font-opnesans text-[14px] font-semibold tracking-[0.267px]'>Login with Google</p>

        </div>
            <div className="form-control-two relative mb-[70px]">
              <input
                className="peer w-full md:w-[370px] md:ps-0 ps-4  py-[27px] text-darkBlueTWO font-opnesans text-xl font-semibold border-darkBlueOne border-b-[2px] border-opacity-30 block focus:outline-none bg-white"
                type="text"
                required
              />
              <Wavelabel classname={"absolute top-[30px] md:left-[0px] left-4 text-xl opacity-50 text-darkBlueOne peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70  transition-all duration-300"} text={"Emailaddress"}></Wavelabel>
            </div>
            <div className="form-control-two relative mb-[55px]">
              <input
                className="peer w-full md:w-[370px] md:ps-0 ps-4 py-[27px] text-darkBlueTWO font-opnesans text-xl font-semibold border-darkBlueOne border-b-[2px] border-opacity-30 block focus:outline-none bg-white"
                type="password"
                required
              />
              <Wavelabel classname={"absolute top-[30px] md:left-[0px] left-4 text-xl opacity-50 text-darkBlueOne peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70  transition-all duration-300"} text={"Password"}></Wavelabel>
            </div>
            <p className='py-[26px] w-full md:w-auto md:px-[122px] text-center bg-violet text-xl font-opnesans font-semibold text-white rounded-[9px] inline-block cursor-pointer active:scale-[0.98] mb-10'>Login to Continue</p>
            <p className='text-darkBlueTwo text-[14px] font-opnesans'>Don’t have an account ? <Link className='text-orange font-bold cursor-pointer' to ="/Registration" >Sign up</Link> </p>
      </div>


      <div className='md:w-[40%]'>
        <img className='md:w-screen md:h-screen' src={Loginimg} alt="" />
      </div>

    </section>
    
    </>
  )
}

export default Login
