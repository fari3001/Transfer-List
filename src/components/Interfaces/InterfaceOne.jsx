import AccountDetails from '../Accounts/AccountDetails'
import Transfer from '../Transfer/TransferOne'
import TransactionsTwo from '../Transactions/TransactionsTwo'
import '../../App.css'


export default function InterfaceOne({ amountOne, animationLine, currentFigure, setCurrentFigure, setAnimationLine, transactionTwo, date, total, totalTwo, amountTwo, setAmountOne, setTotal, setTotalTwo, setAmountTwo, description, setDescription}) {


  return (
    <div className='wrapper'>
      <div className='header'>
          <AccountDetails  total={total} totalTwo={totalTwo} currentFigure={currentFigure} amountOne={amountOne} setTotal={setTotal} description={description} />
          <Transfer amountOne={amountOne} setAmountOne={setAmountOne} currentFigure={currentFigure} setCurrentFigure={setCurrentFigure} total={total} setTotal={setTotal} totalTwo={totalTwo} setTotalTwo={setTotalTwo} description={description} setDescription={setDescription} />
      </div>
      <div className='footer'>
          <TransactionsTwo  animationLine={animationLine} currentFigure={currentFigure} setAnimationLine={setAnimationLine} amountTwo={amountTwo} setAmountTwo={setAmountTwo} setTotal={setTotal} setTotalTwo={setTotalTwo} transactionTwo={transactionTwo} date={date} />
      </div>
    </div>
  )
}
