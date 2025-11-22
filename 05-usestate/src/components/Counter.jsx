import React,{useState} from 'react'

const Counter = () => {
    const [num,setNum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}>Increment</button>
      <button onClick={()=>{
        setNum(num-1)
      }}>Decrement</button>
    </div>
  )
}

export default Counter
