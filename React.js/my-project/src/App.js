import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Luísa';
  return (
    <div className="App">
     <HelloWorld/>
     <SayMyName name="Fernando" />
     <SayMyName name="Cristiane" />
     <SayMyName name="Sidnei" />
     <SayMyName name={name} />
     <Pessoa 
      name="Fernando" 
      yearsOld="18" 
      profession="Trainee" 
      picture="https://via.placeholder.com/150"
     />
    </div>
  );
}

export default App;
