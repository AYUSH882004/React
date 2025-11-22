import React, { useState } from 'react'
import Counter from './components/Counter'
import Batchupdate from './components/batchupdate';
const App = () => {
  const [obj,setObj] = useState({Name:'Ayush', Age: 20});
  function ObjectChangeing(){
    let newobj = {...obj};
    console.log(newobj)
    newobj.Name = 'Sarthak'
    console.log(obj)
    console.log(newobj)
    setObj(newobj);
  } 
  return (
    <div>
      <Counter />
      <h1>{obj.Name} {obj.Age}</h1>
      <button onClick={ObjectChangeing}>Click</button>

    <Batchupdate />
    </div>
  )
}

export default App
