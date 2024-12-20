import React from 'react'
import Button from '../ChildComponent/page'

const ParentComponent = () => {
  return (
    <div className="flex justify-center items-center pt-20">
    <Button btnName="Login" bgColor="bg-green-500" />

    <Button btnName="LogOut" bgColor="bg-yellow-500" />
  </div> 
  )
}

export default ParentComponent