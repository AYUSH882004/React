import React, { useState } from 'react'

const Batchupdate = () => {
    const [num,setNum] = useState(0);

    function update(){
        // setNum(num+1)
        // setNum(num+1)
        // setNum(num+1)   //wrong way
        setNum((prev)=>prev+1)
        setNum((prev)=>prev+1)
        setNum((prev)=>prev+1)
    }
  return (
    <div>
      <h2>{num}</h2>
      <button className='btn' onClick={update}></button>
    </div>
  )
}

export default Batchupdate
