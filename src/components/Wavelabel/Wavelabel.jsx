import React from 'react'

const Wavelabel = ({text, classname}) => {
  return (
    <>
      <label className={`${classname}`}>
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