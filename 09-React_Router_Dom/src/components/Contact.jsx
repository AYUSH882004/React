import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <div className='text-white'>
      <h1>Contact Page</h1>
      <button onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  )
}

export default Contact
