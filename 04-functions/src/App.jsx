import React from 'react'

const App = () => {
  function pagescrolling(ele){
    if(ele>0){
      console.log('down scrolling....')
    }
    else{
      console.log('upp Scrolling...')
    }
  }
  return (
    <div onWheel={(ele)=>{
      pagescrolling(ele.deltaY)
    }}>
      <div className='page1' onChange={(ele)=>{
        console.log(ele.target.value)
      }}>
        <input type="text" placeholder='Enter your name' />
      </div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App
