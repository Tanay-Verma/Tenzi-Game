import './App.css';
import Die from './components/Die';
import Confetti from 'react-confetti';
import { useWindowSize } from 'usehooks-ts'
import { useState, useEffect} from "react"


function App() {
  const { width, height } = useWindowSize()

  // initialising array of size 10 with random numbers
  let allNewDice = () => {
    let newArr = []
    for (let i = 0; i < 10; i++) {
      newArr.push({value:Math.ceil(Math.random()*6),isHeld:false,id:i})
    }
    return newArr
  }

  let [randomNumsArr, setRandomNumsArr] = useState(allNewDice())
  let [tenzi, setTenzi] = useState(false)

  useEffect(()=>{
    let allHeld = randomNumsArr.every(ele => ele.isHeld)
    let allSame = randomNumsArr.every(ele => ele.value === randomNumsArr[0].value)
    if(allHeld && allSame)
      {setTenzi(true)}
  } 
    ,[randomNumsArr])

  // mapping over the random number array and setting those numbers in Die component
  const dice = randomNumsArr.map((num) => {
    return (<Die key={num.id} value={num.value} handleDieClick={(event)=>handleDieClick(event,num.id)} isHeld={num.isHeld}/>)
  })

  // changing the number on click of Roll button
  function handleClick() {
    if(!tenzi) setRandomNumsArr(oldArr => oldArr.map((ele,i) => ele.isHeld ? ele : { value: Math.ceil(Math.random() * 6), isHeld: false, id: i }))
    else {
      setRandomNumsArr(allNewDice())
      setTenzi(false)
    }
  }


  function handleDieClick(event,id) {
    setRandomNumsArr(oldArr => oldArr.map(ele => {return ele.id === id ?{...ele,isHeld:!ele.isHeld}:ele}))
  }

  return (
    <>
    {tenzi && <Confetti width={width} height={height}/>}
    <div className="App">
      <div className='hero'>
        <div className='hero--content'>
          <div className='inner--content'>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same.
              Click each die to freeze it at its current value between rolls.
            </p>
            <div className='game--grid'>
              {dice}
            </div>
            <button className='play' onClick={handleClick}>{tenzi? "New Game":"Roll"}</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
