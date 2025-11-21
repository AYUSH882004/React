import React from 'react'

const Rcards = (props) => {
  return (
    <div className='p-3 relative overflow-hidden h-full w-80 rounded-4xl '>
      <img className=' rounded-4xl h-full w-full object-cover' src={props.img} alt="" />
        <div className='p-8 absolute h-full w-full  top-0 left-0 flex flex-col justify-between'>
            <h2 className='text-3xl bg-white font-semibold rounded-full h-14 w-14 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg font-medium text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing atae non quas labore cumque modi dolorem amet ullam, laborum, quis adipisci ducimus sapiente eius nemo.</p>
                <div className='flex justify-between'>
                    <button className='text-lg font-medium text-white bg-blue-600 py-2 px-8 rounded-3xl'>{props.tag}</button>
                    <button className='text-lg font-medium text-white bg-blue-600 py-2 px-3 rounded-3xl'><i class="ri-arrow-right-long-line"></i></button>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Rcards
