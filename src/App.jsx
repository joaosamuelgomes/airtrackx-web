import './App.css'
import Navbar from './components/navbar'
import { AirQuality } from './components/airquality'
import Data from './components/data'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <AirQuality/>
      <Data/>
      {/* Footer */}
      <footer className="p-4">
        {/* Footer content */}
      </footer>
    </div>
  )
}

export default App
