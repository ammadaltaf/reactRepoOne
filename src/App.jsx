
import './App.css'
import {EventProps} from './EventProps'
import {EventPropagation} from './EventPropagation'
const  App = () => {

  return (
    <>
    <h2>Event as Props</h2>
    <EventProps/><br/>
    <h2>Event Propagation</h2>
    <EventPropagation/>
    </>
);
}

export default App
