import Calculator from '../components/Calculator/Calculator';
import './App.css';

function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <div style={{width, height}} className="App">
      <Calculator />
    </div>
  );
}

export default App;
