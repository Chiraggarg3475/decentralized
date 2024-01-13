import './App.css'
import ParticlesBg from 'particles-bg'
import Home from './components/Home/Home'
import Images from './components/Images/Images'

function App() {
  

  return (
    <div className='h-full '>
      <Home />
      <Images />
      <ParticlesBg type="polygon" bg={true} />
    </div>
  )
}

export default App
