import React from 'react'
import '../styles/LandingPage.css'

export default function LandingPage() {
    let { display, setDisplay } = React.useState("none")
    return (
        <div className='landingPage'>
            <h1 className='landingPage--title'>WELCOME TO TENZI</h1>
            <div className='btnDiv'>
                <button className='playBtn'>New Game</button>
            </div>
        </div>
    )
}
