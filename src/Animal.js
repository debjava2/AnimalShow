import './AnimalShow.css'
import React, { useState } from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const svgMap={
    bird,cat,cow,dog,gator,heart,horse
}

function Animal({type}) {
    const[clicks,setClicks]=useState(0);
    const handleClick=()=>{
        setClicks(clicks+1)
    }
  return (
    <div className='animal-show' onClick={handleClick}>
        <img alt='animal' className='animal' src={svgMap[type]} />
        <img alt="heart" className='heart' src={heart} 
        style={{
            width:10+10*clicks
        }}
        />

    </div>
  )
}

export default Animal