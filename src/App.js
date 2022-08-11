import './App.css';

function App() {
  return (
    <div className="App">
      <div className='hero'>
        <div className='hero--content'>
          <div className='inner--content'>
            <h1>Tenzies</h1>
            <p>Roll until all dice are the same.
              Click each die to freeze it at its current value between rolls.
            </p>
            <div className='game--grid'>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
            </div>
            <button className='play'>Roll</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
