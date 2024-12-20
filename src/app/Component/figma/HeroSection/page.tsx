import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div>
<div className='flex w-[1920px] h-[829px] py-[140px] px-[220px] bg-[#043873]'>
<div className='w-[656px] h-[361px] gap-[60px] '>
    <div className='w-[656px] h-[238px] gap-6'>
        <h1 className='text-white text-5xl font-extrabold leading-tight pb-5'>Get More Done With <br /> Whitepace </h1>
        <p className='text-white text-[15px] font-extralight'>Project management software that enables your team to collaborate, plan,<br />
        analyze and manage everyday tasks</p>
</div>
<button className='flex w-[219px] h-[63px] rounded-lg p-5 gap-[10px] text-white font-light bg-[#4F9CF9] '>
    Try Whitepace free <IoIosArrowRoundForward className='mt-[6px] w-6  font-bold'/>
</button>

</div>
<div className='w-[824px] h-[549px]  bg-[#C4DEFD] justify-end items-center'> </div>
</div>
    </div>
  )
}

export default Hero;