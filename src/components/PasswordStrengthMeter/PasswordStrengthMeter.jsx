import React from 'react'
import zxcvbn from 'zxcvbn'

const PasswordStrengthMeter = ({password}) => {
    const result = zxcvbn(password)
    const score = result.score * 100/4

    const passColor =()=>{
        switch(result.score){
            case 0:
                return '#828282'
            case 1:
                return '#ea1111'
            case 2:
                return '#ffad00'
            case 3:
                return '#9bc158'
            case 4:
                return '#00b500'
            default:
                return 'none'
        }
    }
    const passLabel =()=>{
        switch(result.score){
            case 0:
                return 'Very weak'
            case 1:
                return 'Weak'
            case 2:
                return 'Good'
            case 3:
                return 'Strong'
            case 4:
                return 'Very strong'
            default:
                return 'none'
        }
    }
    const changePasswordColor = ()=>({
        width: `${score}%`,
        background: passColor(),
        height:"8px"
    })
    
  return (
    <div className="mt-[6px] flex gap-4 ">
      <div className="md:w-[260px] w-[240px] h-2 rounded-[10px] bg-gray-200">
        <div
          style={changePasswordColor()}
          className="rounded-[10px] transition-all duration-500"
        ></div>
      </div>
      <p className="text-[16px] font-poppins font-semibold  mt-[4px] leading-[0px]" style={{color:passColor()}}>
        {passLabel()}
      </p>
    </div>
  );
}

export default PasswordStrengthMeter