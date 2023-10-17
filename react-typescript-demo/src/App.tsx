import './App.css'
import BoxApplication from './components/BoxChildren'
import Button from "./components/Buttons"
import ControlPanel from './components/ControlPanel'
import Counter from './components/Counter'
import NameBadge from './components/NameBadge'
import User from './components/User'



function App() {
  
  return (
    <div>
      <h1>React Typescript Demo</h1>
     <Button handleClick={(event) => console.log("Button clicked", event)}/>
     <ControlPanel name="hej" onChange={() => console.log("changed")}/>
     <BoxApplication/>
     <Counter/>
     <NameBadge name="Sandra"/>
     <User/>

    </div>
  )
}

export default App
