import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento number={1}/>
      <Evento number={2}/>
      <Form />
    </div>
  );
}

export default App;
