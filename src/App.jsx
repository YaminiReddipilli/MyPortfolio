// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Services'
import Education from './components/Education';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Service />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
