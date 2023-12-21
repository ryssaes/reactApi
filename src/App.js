import {Container} from 'reactstrap';
import './App.css';
import Menu from './components/Menu';
import Votos from './components/Votos';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Votos></Votos>
    </div>
  );
}

export default App;
