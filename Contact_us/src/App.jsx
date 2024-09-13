import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/Contactheader/contact'
import Form from './components/Form/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
        <Navigation/>
        <main className='main_container'>
        <Contact />
        <Form />
        </main>
       </div>
    </>
  )
}

export default App
