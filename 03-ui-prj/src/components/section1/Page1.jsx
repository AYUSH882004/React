import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1 = () => {
  return (
    <div className='pb-16 pl-6 pt-6 h-[92vh] w-full flex items-center '>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1
