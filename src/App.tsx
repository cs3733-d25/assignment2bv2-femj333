//import { useState } from 'react'
import Title from "./components/title"
import Intro from "./components/intro"
import Hobby1 from "./components/hobby1"
import Hobby2 from "./components/hobby2"
import List1 from "./components/list1"
import Table1 from "./components/table1"
import Form1 from "./components/form1"
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Title />
        <Intro partnerName1={"Fem"} partnerName2={"Yara"} />
        <Hobby1 />
        <List1 />
        <Table1 />
        <Form1 />
        <Hobby2 />
    </>
  )
}

export default App
