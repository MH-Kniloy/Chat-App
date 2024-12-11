import React, { useState } from "react";
import Loginimg from "../../assets/login.png";
import Google from "../../assets/google.png";
import Wavelabel from "../../components/Wavelabel/Wavelabel";
import { Link, useNavigate } from "react-router-dom";
import { FaFaceDizzy } from "react-icons/fa6";
import { FaFaceFlushed } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PacmanLoader } from "react-spinners";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Home from "../Home/Home";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../features/User/userSlice";

const Login = () => {
  const dispatch = useDispatch()
  // for google login firebase 
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  
  const handleGoogleLogin =()=>{
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(userLoginInfo(user));
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        toast.success("Login Successful")

        setTimeout(()=>{
           navigate("/Home")
        }, 4000)
        setSpinner(true);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  // for email validation
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  // for password validation
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  // for show password
  const [showPassword, setShowPassword] = useState(false);

  // for spinner loader
  const [spinner, setSpinner] = useState(false);

  // for successful navigation to home page on sign in
  const navigate = useNavigate();

  // for changing password type
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  // for email catching input value
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  // for actions clicking submit
  const handleSubmit = () => {
    // for email
    if (!email) {
      setEmailErr("Enter an email addess");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailErr("Enter an valid email address");
    }

    // for password
    if (!password) {
      setPasswordErr("Enter a password");
    }

    // for sign in
    if (email && password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setEmailErr("");
          setPasswordErr("");
          // Signed in
          const user = userCredential.user;
           dispatch(userLoginInfo(user))
          if (user.emailVerified === false) {
            toast.error("Verify your email address");
          } else {
            toast.success("Login Successful");

            setTimeout(() => {
              navigate("/Home");
            }, 4000);

            setSpinner(true);
          }

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            setEmailErr("Enter a registered email or sign up");
            setPasswordErr("Wrong password");
          }
        });
    }
  };

  return (
    <>
      <section className="md:flex">
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
        <div className="md:w-[60%] md:pt-[220px] pt-8 md:ps-[260px] ps-4 pe-4 md:pe-0 mb-12 md:mb-0">
          <h2 className="text-darkBlueTwo font-opnesans font-bold md:text-[34px] text-3xl mb-8">
            Login to your account!
          </h2>

          <div onClick={handleGoogleLogin} className="flex mb-14 cursor-pointer gap-[10px] ps-[30px] py-[22px] border-[1px] border-darkBlueTwo border-opacity-30 w-[240px] rounded-[9px] active:scale-[0.98]">
            <img src={Google} alt="" />
            <p className="text-darkBlueTwo font-opnesans text-[14px] font-semibold tracking-[0.267px]">
              Login with Google
            </p>
          </div>
          <div className="form-control-two relative mb-[70px]">
            <input
              onChange={handleEmail}
              value={email}
              className="peer w-full md:w-[370px] md:ps-0 ps-4  py-[27px] text-darkBlueTWO font-opnesans text-xl font-semibold border-darkBlueOne border-b-[2px] border-opacity-30 block focus:outline-none bg-white"
              type="text"
              required
            />

            <Wavelabel
              classname={
                "absolute top-[30px] md:left-[0px] left-4 text-xl opacity-50 text-darkBlueOne peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70  transition-all duration-300"
              }
              text={"Emailaddress"}
            ></Wavelabel>

            <p className="absolute top-[90px] left-[0px] font-nunito text-red-600">
              {emailErr}
            </p>
          </div>
          <div className="form-control-two relative mb-[55px]">
            {showPassword ? (
              <FaFaceFlushed
                onClick={handleShowPass}
                className="absolute top-[40%] md:left-[43%] left-[90%] cursor-pointer text-2xl text-darkBlueOne"
              />
            ) : (
              <FaFaceDizzy
                onClick={handleShowPass}
                className="absolute top-[40%] md:left-[43%] left-[90%] cursor-pointer text-2xl text-darkBlueOne"
              />
            )}
            <input
              onChange={handlePassword}
              value={password}
              className="peer w-full md:w-[370px] md:ps-0 ps-4 py-[27px] text-darkBlueTWO font-opnesans text-xl font-semibold border-darkBlueOne border-b-[2px] border-opacity-30 block focus:outline-none bg-white"
              type={`${showPassword ? "text" : "password"}`}
              required
            />
            <Wavelabel
              classname={
                "absolute top-[30px] md:left-[0px] left-4 text-xl opacity-50 text-darkBlueOne peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70  transition-all duration-300"
              }
              text={"Password"}
            ></Wavelabel>

            <p className="absolute top-[90px] left-[0px] font-nunito text-red-600">
              {passwordErr}
            </p>
          </div>
          <p
            onClick={handleSubmit}
            className="py-[26px] w-full md:w-auto md:px-[122px] text-center bg-violet text-xl font-opnesans font-semibold text-white rounded-[9px] inline-block cursor-pointer active:scale-[0.98]"
          >
            {spinner ? (
              <PacmanLoader className="me-8 " color="#fff" size={12} />
            ) : (
              "Login to Continue"
            )}
          </p>
          <p className="text-orange font-opnesans font-semibold mb-10 mt-2">
            <Link to="/Forgotpassword">Forgot password</Link>
          </p>
          <p className="text-darkBlueTwo text-[14px] font-opnesans">
            Don’t have an account ?
            <Link
              className="text-orange font-bold cursor-pointer ms-1"
              to="/Registration"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="md:w-[40%]">
          <img className="md:w-screen md:h-screen" src={Loginimg} alt="" />
        </div>
      </section>
    </>
  );
};

export default Login;
