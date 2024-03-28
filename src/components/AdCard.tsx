import React from 'react'

export const AdCard = () => {
  return (
<div className='ad-card cursor-pointer w-[15vw] h-[70vh] bg-gray-600 rounded-md relative text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
    <div className='right-2 top-2 absolute bg-black text-white text-sm min-w-[3vw] text-center'>Ad</div>
        <div className="imgdiv m-2 w-auto h-auto">
            <img src="../../assets/poster.png" alt="" />
            </div>
        <div className="namediv m-2 font-semibold [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-black">Advertisement title</div>
        <div className="statsdiv m-2 flex justify-evenly text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisicing elit. Dolores dolorem magnam  adipisicing elit. adipisicing elit. Dolores dolorem magnam  adipisicing elit. adipisicinlores dolorem magnam ipsa maiores, eius porro. Nemo unde mollitia odio ab placeat, quo magni aliquam dicta quasi voluptatem, expedita eum veniam accusantium adipisci dolorum incidunt facilis, vitae eius.
        </div>
    </div>  )
}
