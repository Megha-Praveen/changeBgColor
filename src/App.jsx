import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor,setBgColor] = useState("")

  const changeBackgroundColor = (color) => {
    setBgColor(color)
  }

  return (
    <>
      <div className="text-center" style={{backgroundColor: bgColor, height:'100vh'}}>
        <button onClick={()=>changeBackgroundColor('blue')} className="btn btn-primary m-2">Blue</button>
        <button onClick={()=>changeBackgroundColor('red')} className="btn btn-danger m-2">Red</button>
        <button onClick={()=>changeBackgroundColor('green')} className="btn btn-success m-2">Green</button>
        <button onClick={()=>changeBackgroundColor('yellow')} className="btn btn-warning m-2">Yellow</button>
        <button onClick={()=>changeBackgroundColor('black')} className="btn btn-dark m-2">Black</button>
      </div>
    </>
  )
}

export default App