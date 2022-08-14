import React from 'react'
import "../styles/Die.css"

export default function Die({value,handleDieClick,isHeld}) {
    return (
        <div 
            className='die' 
            onClick={handleDieClick} 
            style={{
            backgroundColor: isHeld ? "#59E391" : "white"}}
            >
            {value}
        </div>
    )
}
