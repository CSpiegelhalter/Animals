import logo from './logo.svg';
import './App.css';

function App() {


  // function handleClick() {
  //   fetch('http://localhost:9000/other').then((res) => {
  //       console.log(res)
  //   })
  // }

  async function handleClick() {
    let results = await fetch('http://localhost:9000/other')
    console.log(await results.json())
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          
        </div>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
