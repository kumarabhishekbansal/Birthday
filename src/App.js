import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Im from './components/Im'
import Bet from './components/Bet'
import BetIm from './components/BetIm'
import './App.css'
const App = () => {
  return (
    <>
        <div className='bgimg d-flex flex-column'>
    </div>
        <div className="main_div d-flex  justify-content-between">
        <div className="div1 d-flex flex-column  w-25">
          <Im />  
        </div>
        <div className="div2 d-flex flex-column align-items-center w-50">
              <Bet />
             <BetIm />
        </div>
        <div className="div1 d-flex flex-column  align-items-end w-25">
          <Im />  
        </div>
        </div>
    </>
  )
}

export default App