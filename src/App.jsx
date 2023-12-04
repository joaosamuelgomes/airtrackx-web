import './App.css'
import Navbar from './components/navbar'
import { AirQuality } from './components/airquality'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <AirQuality/>
      {/* Footer */}
      <footer className="p-4">
        {/* Footer content */}
      </footer>
    </div>
  )
}

export default App
