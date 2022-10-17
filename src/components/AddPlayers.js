import React from 'react'
import '../styles/AddPlayers.css'

export default function AddPlayers(props) {
    return (props.trigger) ? (
        <div className='addPlayers'>
            <div className='addPlayers--content'>
                <div className='addPlayers--inner'>
                    {props.title}
                    <button className='addPlayers--close--btn'>X</button>
                </div>
                {props.children}
            </div>
        </div>
    ) : ""
}
