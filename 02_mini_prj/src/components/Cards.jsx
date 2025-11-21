import React from 'react'
import 'remixicon/fonts/remixicon.css'
import App from '../App'
const Cards = ({data}) => {
    // console.log(data)
  return (
    <div>
      
        <div className="card">
          <div><div className="top">
            <img src="data:image/png;base64,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" alt="" />
           <button>Save  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg></button>
          </div>
          <div className="center">
            <h3>{data.companyName} <span>{data.datePosted}</span></h3>
            <h2>{data.post}</h2>
            <div className='tag'>
              <h4>{data.tag1}</h4>
              <h4>{data.tag2}</h4>
            </div>
            
          </div></div>
          <div className="bottom">
            <div>
              <h3> {data.pay} </h3>
              <h3>{data.location}</h3>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
  )
}

export default Cards
