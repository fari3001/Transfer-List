import AccountDetails from '../Accounts/AccountDetails'
import Transfer from '../Transfer/TransferOne'
import TransactionsTwo from '../Transactions/TransactionsTwo'
import '../../App.css'


export default function InterfaceOne({ amountOne, transactionTwo, date, total, amountTwo, setAmountOne, setTotal, setAmountTwo, description, setDescription}) {


  return (
    <div className='wrapper'>
      <div className='header'>
          <AccountDetails  total={total} setTotal={setTotal} description={description} />
          <Transfer amountOne={amountOne} setAmountOne={setAmountOne} total={total} setTotal={setTotal} description={description} setDescription={setDescription} />
      </div>
      <div className='footer'>
          <TransactionsTwo  amountTwo={amountTwo} setAmountTwo={setAmountTwo} transactionTwo={transactionTwo} date={date} />
      </div>
    </div>
  )
}
