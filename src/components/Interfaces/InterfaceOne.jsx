import AccountDetails from '../Accounts/AccountDetails'
import Transfer from '../Transfer/TransferOne'
import TransactionsTwo from '../Transactions/TransactionsTwo'
import '../../App.css'


export default function InterfaceOne({ amountOne, transactionTwo, date, total, amountTwo, setAmountOne, setTotal, setAmountTwo, description, setDescription}) {
  console.log(amountTwo)


  return (
    <div className='wrapper'>
      <div className='header'>
          <AccountDetails amountOne={amountOne} total={total} setTotal={setTotal} description={description} />
          <Transfer amountOne={amountOne} setAmountOne={setAmountOne} description={description} setDescription={setDescription} />
      </div>
      <div className='footer'>
          {/* <TransactionsTwo  amountTwo={amountTwo} setAmountTwo={setAmountTwo} transactionTwo={transactionTwo} date={date} /> */}
      </div>
    </div>
  )
}
