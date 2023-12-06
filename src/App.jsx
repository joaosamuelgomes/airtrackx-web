import './App.css'
import Navbar from './components/navbar'
import AirQuality  from './components/airquality'
import Data from './components/data'
import Plans from './components/plans'
import Footer from './components/footer'
import Contact from './components/contact'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <AirQuality/>
      <Data/>
      <Plans/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
