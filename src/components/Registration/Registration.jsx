
import Wavelabel from '../Wavelabel/Wavelabel'
import registrationImg from '../../assets/registration.png'

const Registration = () => {
  return (
    <>
      <section className="md:flex">
        <div className="md:w-1/2 md:pt-[225px] md:ps-[190px] pt-10 ps-4 pe-4 md:pe-0">
          <h1 className="text-darkBlueOne font-nunito md:text-[34px] text-2xl font-bold md:mb-3 mb-2">
            Get started with easily register
          </h1>

          <p className="md:text-xl text-[18px] opacity-50 font-nunito md:mb-[60px] mb-8">
            Free register and you can enjoy it
          </p>

          <form className="mb-[36px]">
            <div className="form-control relative md:mb-[56px] mb-8">
              <input
                className="peer w-full md:w-[370px] md:pl-[53px] pl-8 py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none bg-white"
                type="text"
                required
              />
              <Wavelabel text={"Emailaddress"}></Wavelabel>
            </div>
            <div className="form-control relative md:mb-[56px] mb-8">
              <input
                className="peer w-full md:w-[370px] md:pl-[53px] pl-8 py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none bg-white"
                type="text"
                required
              />
              <Wavelabel text={"Fullname"}></Wavelabel>
            </div>
            <div className="form-control relative md:mb-[56px] mb-8">
              <input
                className="peer w-full md:w-[370px] md:pl-[53px] pl-8 py-[27px] text-darkBlueOne font-nunito text-xl font-semibold border-darkBlueOne border-[2px] border-opacity-30 rounded-[9px] block focus:outline-none bg-white"
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
          <p className="text-darkBlueTwo font-opnesans text-[14px] text-center w-[350px] mb-12 md:mb-0">
            Already have an account ?{" "}
            <a
              className="text-orange font-opnesans text-[14px] font-bold"
              href="#"
            >
              Sign In
            </a>
          </p>
        </div>

        <div className="md:w-1/2">
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