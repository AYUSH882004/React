import React, { useState } from 'react'

// localstorage.clear()
// localstorage.setItem()
// localstorage.getItem()
// localstorage.removeItem()

// object -> JSON.Stringify(string)
// string -> JSON.parse(object)



const App = () => {
  const [heading, setHeading] = useState('');
  const [title, setTitle] = useState('');
  const [task, setTask] = useState([]);
  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log(heading)
    // console.log(title)
    const copyTask = [...task];
    copyTask.push({ heading, title });
    // console.log({heading,title})
    setTask(copyTask)

    setHeading('')
    setTitle('')
    console.log('form submitted...')
  }
  const DeleteTask = (idx) =>{
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
  }

  localStorage.clear();
  localStorage.setItem('users',JSON.stringify(task));

  return (
    <div className="bg-black h-screen flex items-start gap-10 text-white p-10">
      {/* Left column */}
      <div>
        <h1 className="text-6xl font-bold">Add Notes</h1>
        <form onSubmit={(e) => {
          SubmitHandler(e)
        }} className="py-14 flex flex-col gap-6 items-start w-[580px]">
          <input onChange={(e) => {
            setHeading(e.target.value)
          }} value={heading} className="border-2 p-5 text-3xl font-medium rounded-xl w-full" type="text" placeholder="Enter Notes Heading" />
          <textarea onChange={(e) => {
            setTitle(e.target.value)
          }} value={title} className="border-2 p-5 text-2xl font-medium rounded-xl w-full" placeholder="Write details here..." />
          <button className="active:scale-95 border-2 p-5 bg-gray-500 text-2xl font-medium rounded-xl w-1/3" >Submit</button>
        </form>
      </div>

      {/* Divider — use self-stretch so it fills parent's height */}
      <div className="border-l-2 self-stretch h-full ml-20"></div>

      {/* Right column (will start right after divider) */}
      <div className="pl-6">
        <h2 className="text-6xl font-bold">Recent Notes</h2>
        <div className='flex flex-wrap gap-5 my-14 text-black'>
         {task.map((item, idx) => (
  <div
    key={idx}
    className="relative h-[280px] w-[220px]
  bg-[url('https://img.freepik.com/premium-psd/png-cute-paper-notes-illustration-transparent-background_53876-574262.jpg')]
  bg-cover bg-center bg-no-repeat
  rounded-xl p-6 flex flex-col gap-3"
  >
    <h3 className="text-3xl underline font-bold">{item.heading}</h3>
    <p className="leading-tight text-xl text-gray-600 font-semibold">
      {item.title}
    </p>
    <button
      onClick={() => DeleteTask(idx)}
      className="absolute active:scale-95 bottom-2 left-9 bg-red-400 py-1 px-9 text-xl font-semibold rounded-md"
    >
      Delete
    </button>
  </div>
))}


        </div>
      </div>
    </div>
  )
}

export default App
