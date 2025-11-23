import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='text-white'>
      <h1>Home Page</h1>
<div className="flex gap-3"><button className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate('/')}>
        Go to Home
      </button>
      <button  className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate(1)}>
        Next page
      </button>
      <button  className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate(-1)}>
        Prev page
      </button></div>
    </div>
  )
}

export default Home
