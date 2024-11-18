import React from 'react'

const Wavelabel = ({text}) => {
  return (
    <>
      <label className="absolute top-[30px] left-[37px] px-4 text-xl opacity-50 text-darkBlueOne peer-focus:top-[0px] peer-valid:top-[0px]  peer-focus:text-[14px] peer-valid:text-[14px] peer-focus:font-semibold peer-valid:font-semibold peer-focus:tracking-[1px] peer-valid:tracking-[1px] peer-focus:opacity-100 peer-valid:opacity-100 peer-focus:text-opacity-70 peer-valid:text-opacity-70 bg-white transition-all duration-300">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block transition-transform duration-500 ease-custom opacity-100"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {letter}
          </span>
        ))}
      </label>
    </>
  );
}

export default Wavelabel