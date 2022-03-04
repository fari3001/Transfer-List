import './App.css';
import React, {useState} from 'react'
import InterfaceOne from './components/Interfaces/InterfaceOne';
import InterfaceTwo from './components/Interfaces/InterfaceTwo';


function App() {
  const [amountOne, setAmountOne] = useState({
    amount: "",
    desc: ""
  })
  const [amountTwo, setAmountTwo] = useState({
    amount: "",
    desc: ""
  })
  const [description, setDescription] = useState('')
  const [currentFigure, setCurrentFigure] = useState('')
  const [transactionTwo, setTransactionTwo] = useState('')
  const [animationLine, setAnimationLine] = useState('')
  const [total, setTotal] = useState(10000)
  const [totalTwo, setTotalTwo] = useState(8000)
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="app">
      <div className='interface-wrapper'>
        <InterfaceOne amountOne={amountOne} currentFigure={currentFigure} setCurrentFigure={setCurrentFigure} animationLine={animationLine} setAnimationLine={setAnimationLine} amountTwo={amountTwo} total={total} totalTwo={totalTwo} setTotal={setTotal} setTotalTwo={setTotalTwo} setAmountOne={setAmountOne} description={description} setDescription={setDescription} date={date} transactionTwo={transactionTwo} />
      </div>
      <div className='interface-wrapper'>
        <InterfaceTwo amountOne={amountOne} amountTwo={amountTwo} currentFigure={currentFigure} setCurrentFigure={setCurrentFigure} setTotal={setTotal} totalTwo={totalTwo} setTotalTwo={setTotalTwo} setAmountTwo={setAmountTwo} description={description} date={date} transactionTwo={transactionTwo} setTransactionTwo={setTransactionTwo} />
      </div>
    </div>
    )
}

export default App;
