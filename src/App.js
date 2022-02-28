import './App.css';
import InterfaceOne from './components/Interfaces/InterfaceOne';
import InterfaceTwo from './components/Interfaces/InterfaceTwo';

function App() {
  return (
    <div className="app">
      <div className='interface-wrapper'>
        <InterfaceOne />
      </div>
      <div className='interface-wrapper'>
        <InterfaceTwo />
      </div>
    </div>
  );
}

export default App;
