import './App.css'
import Navbar from './components/navbar'
import AirQuality  from './components/airquality'
import Data from './components/data'
import Plans from './components/plans'
import Footer from './components/footer'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <AirQuality/>
      <Data/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default App
