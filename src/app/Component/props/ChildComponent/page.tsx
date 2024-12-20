import React from 'react'

const Button = (props:any) => {
  return (
    <div className='w-52 flex justify-center items-center '>

        <button className={`text-white text-4xl ${props.bgColor} hover:bg-blue-700 px-10 py-5 rounded-lg justify-center items-center`}>
            {props.btnName}
            </button>
      <br />
    </div>
  )
}

export default Button