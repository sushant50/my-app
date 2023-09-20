import logo from './logo.svg';
import './App.css';
import Greeter from './Greeter';
import Counter from './Counter';
import Cart from './Cart';
import MyConfigSettings from './update'
const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 }
];

function App() {
  return (
    <div className="App">
      <MyConfigSettings />
      <Cart initialItems={items} />
      <Greeter name="Karen" excitement={3}/>
      <Counter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// const Dog = () => {
//   let number = Math.random() * 10
//   return (
//     <div className="App">
//       <header className="App-header">
//         {number>5 ? `Woof I am a big dog with size ${number}` : `Woof I am a small dog with size ${number}`}
//       </header>
//     </div>
//   );}

export  {App};
