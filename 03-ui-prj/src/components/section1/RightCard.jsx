import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rcards from './Rcards'
import users from '../users'
const RightCard = () => {
  return (
    <div className='flex'>
        {
            users.map((items,idx)=>{
               return <Rcards key={idx} id={idx} img={items.img} tag={items.tag} />
            })
        }
    </div>
  )
}

export default RightCard
