
import './App.css'
import {EventProps} from './EventProps'
import {EventPropagation} from './EventPropagation'
import {UseStateHook} from './hooks/UseStateHook'
const  App = () => {

  return (
    <>
    <h2>Event as Props</h2>
    <EventProps/><br/>
    <h2>Event Propagation</h2>
    <EventPropagation/><br/>
    <UseStateHook/>
    </>
);
}

export default App
