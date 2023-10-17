import './App.css'
import BoxApplication from './components/BoxChildren1'
import Button from "./components/Buttons"
import ControlPanel from './components/ControlPanel'
import Counter from './components/Counter'
import NameBadge from './components/NameBadge'
import User from './components/User'



function App() {

  function handleChange() {
    console.log("changed");
  }
  
  return (
    <div>
      <h1>React Typescript Demo</h1>
     <Button handleClick={(event) => console.log("Button clicked", event)}/>
     <ControlPanel name="hej" onChange={handleChange}/>
     <BoxApplication/>
     <Counter/>
     <NameBadge name="Sandra"/>
     <User/>

    </div>
  )
}

export default App
