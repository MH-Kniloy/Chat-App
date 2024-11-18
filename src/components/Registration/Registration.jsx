
import Wavelabel from '../Wavelabel/Wavelabel'
import registrationImg from '../../assets/registration.png'

const Registration = () => {
  return (
    <>
      <section className="flex">
        <div className="w-1/2 pt-[225px] ps-[190px]">
          <h1 className="text-darkBlueOne font-nunito text-[34px] font-bold mb-3">
            Get started with easily register
          </h1>

          <p className="text-xl opacity-50 font-nunito mb-[60px]">
            Free register and you can enjoy it
          </p>

          <form className="mb-[36px]">
            <div className="form-control relative mb-[56px]">
              <input
                className="peer w-[370px] pl-[53px] py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none bg-white"
                type="email"
                required
              />
              <Wavelabel text={"Emailaddress"}></Wavelabel>
            </div>
            <div className="form-control relative mb-[56px]">
              <input
                className="peer w-[370px] pl-[53px] py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none"
                type="text"
                required
              />
              <Wavelabel text={"Fullname"}></Wavelabel>
            </div>
            <div className="form-control relative mb-[56px]">
              <input
                className="peer w-[370px] pl-[53px] py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none"
                type="password"
                required
              />
              <Wavelabel text={"Password"}></Wavelabel>
            </div>
            <input
              className="py-5 px-[145px] bg-violet text-white font-nunito text-xl font-semibold rounded-[86px] cursor-pointer active:scale-[0.98]"
              type="submit"
              value="Sign up"
            />
          </form>
          <p className="text-darkBlueTwo font-opnesans text-[14px] text-center w-[350px]">
            Already have an account ?{" "}
            <a className="text-orange font-opnesans text-[14px] font-bold" href="#">
              Sign In
            </a>
          </p>
        </div>

        <div className="w-1/2">
          <img
            className="w-full h-screen object-cover"
            src={registrationImg}
            alt="registrationImg"
          />
        </div>
      </section>
    </>
  );
}

export default Registration