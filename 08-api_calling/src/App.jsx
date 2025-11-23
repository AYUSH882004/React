import React from 'react'
import axios from 'axios';
const App = () => {
  const getData=async()=>{
    // const response = await fetch('https://picsum.photos/v2/list')
    // console.log(response)
    // const data =await response.json();
    // console.log(data)


    // or using axios
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={getData}>Submit</button>
    </div>
  )
}

export default App
