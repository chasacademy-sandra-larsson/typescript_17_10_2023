import './App.css'
import Button from "./components/Buttons"
import ControlPanel from './components/ControlPanel'

function App() {
  
  return (
    <div>
      <h1>React Typescript Demo</h1>
     <Button handleClick={(event) => console.log("Button clicked", event)}/>

    </div>
  )
}

export default App
