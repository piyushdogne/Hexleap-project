import React from 'react'
import {Player} from '@/app/utils/data'


export const PlayerCard = ({player}:{player:Player}) => {
  return (
    <div className='player-card w-[15vw] h-[70vh] bg-gray-600 rounded-md text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]  shadow-black'>
        <div className="imgdiv m-2 w-auto h-[78%] rounded-md overflow-hidden text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"><img className='h-full' src={player.photo} alt="" /></div>
        <div className="namediv m-2 font-medium">{player.team}</div>
        <div className="statsdiv bg-gray-700 m-2 flex min-h-[7vh] items-center pl-3 gap-4 rounded-md text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <span><p className='text-xs'>Total Events</p><h5 className='font-mediu'>{player.events}</h5></span>
            <span><p className='text-xs'>Sports</p><h5 className='font-medium'>{player.sport}</h5></span>
        </div>
    </div>
  )
}
