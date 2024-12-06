import React, { useState } from 'react'
import Wavelabel from "../../components/Wavelabel/Wavelabel";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const auth = getAuth();
    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handleReset =()=>{
       sendPasswordResetEmail(auth, email)
         .then(() => {
           toast.success("Password reset email sent")
           setEmail("")
         })
         .catch((error) => {
           const errorCode = error.code;
           console.log(errorCode);
           
         });
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Flip
      />
      <div className="w-[800px] h-[400px] bg-darkBlueOne rounded-[10px] text-white pt-[50px] ">
        <p className="font-bold text-white text-3xl font-opnesans text-center mb-[50px]">
          Forgot password
        </p>
        <div className="form-control-forgot form-control-two relative mb-[70px] ms-[100px]">
          <input
            onChange={handleEmail}
            value={email}
            className="peer w-full md:w-[600px] md:ps-0 ps-4  py-[27px] text-darkBlueTWO font-opnesans text-xl font-semibold border-white border-b-[2px] border-opacity-30 block focus:outline-none bg-transparent"
            type="text"
            required
          />

          <Wavelabel
            classname={
              "absolute top-[30px] md:left-[0px] left-4 text-xl opacity-50 text-white peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70  transition-all duration-300"
            }
            text={"Emailaddress"}
          ></Wavelabel>
        </div>
        <div className="flex justify-center gap-8">
          <p onClick={handleReset} className="py-3 px-12 rounded-[8px] active:scale-[0.98] text-2xl font-semibold cursor-pointer bg-white text-darkBlueOne inline-block">
            Reset
          </p>
          <p
            onClick={() => navigate("/Login")}
            className="py-3 px-12 rounded-[8px] active:scale-[0.98] text-2xl font-semibold cursor-pointer bg-white text-darkBlueOne inline-block "
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword