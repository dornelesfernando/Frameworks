import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "dorneles";
  const newName = name.toLocaleUpperCase();

  function sum(a, b){
    return a + b
  }

  const url = `https://via.placeholder.com/150`

  return (
    <div className="App">
     <h1>Hi {newName}</h1>
     <p>Soma: {sum(1, 2)}</p>
     <img src={url} alt="Minha Imagem"/>
     <HelloWorld/>
    </div>
  );
}

export default App;
