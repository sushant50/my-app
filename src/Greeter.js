import logo from './logo.svg';
import './App.css';

function Greeter({name, excitement}) {
    const clicker = () => {
        alert(name)
    }
  return (
    <div className="App">
        Hello there {name} {'!'.repeat(excitement)}
        <button onClick={clicker}>Click Me!</button>
    </div>
  );
}

export  default Greeter;
