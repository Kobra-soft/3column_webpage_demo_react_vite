import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="items">
          <div className="item first border-2 border-[#00000045]">
            <img src="/vite.svg"/>
            <h1 className='mt-20'>
              Sedans
            </h1>
            <p>
              Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
              or on your next road trip.
            </p>
            <button>Learn more</button>
          </div>
          <div className="item second border-2 border-[#00000045]">
          <img src="/vite.svg"/>
          <h1 className='mt-20'>
              SUVS
            </h1>
            <p>
              Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
              and off-road adventures.
            </p>
            <button>Learn more</button>
          </div>
          <div className="item third border-2 border-[#00000045]">
          <img src="/vite.svg"/>
          <h1 className='mt-20'>
              Luxury
            </h1>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
              rental and arrive in style.
            </p>
            <button className=''>Learn more</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
