import React from 'react'
import { PlayerCard } from './PlayerCard'
import { Player, data } from '@/app/utils/data'
import { EventCard } from './EventCard'
import { Collections, collectionsdata } from '@/app/utils/collectiondata'

export const Collection = () => {
  return (
<>
<main className='w-auto h-auto px-[10vw] py-7 mt-20  text-center [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black relative flex justify-evenly items-center'>
<div className='btns py-2 px-2 border-blue-500 border-[.05rem]'><img src="../../assets/vector.svg" alt=""  className='w-3'/></div>
<div>
    <span className='text-5xl font-bold text-white py-3'>Collection Spotlight</span>
   <div className='w-full mt-20 mb-10 h-auto flex flex-col items-center justify-center gap-10'>
     <div className='flex gap-10'>
    
     {collectionsdata.map((collectiondata: Collections, index: number) => (
         <EventCard key={index} collectiondata={collectiondata} />
         ))}

     </div>
     </div>
</div>
<img src="../../assets/vector2.png" alt="" className='h-10 btns'/>
</main>
</>   )
}
