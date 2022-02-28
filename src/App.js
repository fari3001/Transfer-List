import './App.css';
import React, {useState} from 'react'
import InterfaceOne from './components/Interfaces/InterfaceOne';
import InterfaceTwo from './components/Interfaces/InterfaceTwo';

function App() {
  const [amountOne, setAmountOne] = useState('')
  const [amountTwo, setAmountTwo] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="app">
      <div className='interface-wrapper'>
        <InterfaceOne amountOne={amountOne} amountTwo={amountTwo} setAmountOne={setAmountOne} description={description} setDescription={setDescription}/>
      </div>
      <div className='interface-wrapper'>
        <InterfaceTwo amountOne={amountOne} setAmountOne={setAmountOne}/>
      </div>
    </div>
  );
}

export default App;
