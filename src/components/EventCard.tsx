import { Collections} from '@/app/utils/collectiondata'
import React from 'react'

export const EventCard = ({collectiondata}:{collectiondata:Collections}) => {
  return (
    <>
    <div className='event-card w-[15vw] h-auto bg-gray-600  text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black'>
        <div className="imgdiv  w-auto h-[66%] rounded-md overflow-hidden text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"><img className='w-full' src={collectiondata.photo} alt="" /></div>
        <div className='h-[4vh] w-full flex justify-between items-center'><span className='h-5 w-5 bg-black rounded-full -translate-x-1/2'></span><span className='text-white text-[.7rem] font-extralight'>- - - - - - - - - - - - - - - - - - - - - -</span><span className='h-5 w-5 bg-black rounded-full translate-x-1/2'></span></div>
        <div className="namediv mt-2 font-medium">{collectiondata.team}</div>
            <span><p className='text-xs font-light mt-2'>{collectiondata.date}</p></span>
            <span><p className='text-xs font-light mt-2'>{collectiondata.venue.slice(0,30)}<br/>{collectiondata.venue.slice(31)}</p></span>
        <div className="btn bg-black mt-4 flex min-h-[5vh] max-w-[80%] text-center text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] mx-auto justify-center items-center text-xs cursor-pointer">{collectiondata.ticket}</div>
    </div>    
    </>
  )
}
