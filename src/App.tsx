//import { useState } from 'react'
import Title from "./components/title"
import Intro from "./components/intro"
import Hobby1 from "./components/hobby1"
import Hobby2 from "./components/hobby2"
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Title />
        <Intro partnerName1={"Fem"} partnerName2={"Yara"} />
        <Hobby1 />
        <Hobby2 />
    </>
  )
}

export default App
