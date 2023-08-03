/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="items">
          <div className="item first">
            <div className="image"><img src="../public/icon-sedans.svg" alt="icon"/></div>
            <h1>
              Sedans
            </h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
              or on your next road trip.
            </p>
            <button>Learn more</button>
          </div>
          <div className="item second">
            <div className="image"><img src="../public/icon-suvs.svg" alt="icon"/></div>
            <h1>
              SUVS
            </h1>
            <p>
              Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
              and off-road adventures.
            </p>
            <button>Learn more</button>
          </div>
          <div className="item third">
            <div className="image"><img src="../public/icon-luxury.svg" alt="icon"/></div>
            <h1>
              Luxury
            </h1>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
              rental and arrive in style.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
