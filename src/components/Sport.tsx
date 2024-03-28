import React from 'react'
import { PlayerCard } from './PlayerCard'
import { data , Player} from '@/app/utils/data'
import { AdCard } from './AdCard'


export const Sport: React.FC = () => {
  return (
<>
<main className='w-auto h-auto px-[10vw] py-7 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black'>
    <span className='text-3xl font-bold text-white py-3 border-b-2 border-blue-800'>Sports</span>
   <div className='w-full mt-10 h-auto flex flex-col items-center justify-center gap-10'>
     <div className='w-full flex gap-5'>
    
     {data.map((player: Player, index: number) => (
    <PlayerCard key={index} player={player} />
    ))}

    <AdCard/>
        
     </div>
     <button className='text-white w-[8vw] h-[6vh] bg-blue-500 rounded-md  shadow-black'>See More</button>
   </div>
</main>
</>  )
}
