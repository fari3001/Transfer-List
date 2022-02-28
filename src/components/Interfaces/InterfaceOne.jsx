import AccountDetails from '../Accounts/AccountDetails'
import Transfer from '../Transfer/TransferOne'
import TransactionsTwo from '../Transactions/TransactionsTwo'
import '../../App.css'


export default function InterfaceOne({amountOne, amountTwo, setAmountOne, setAmountTwo, description, setDescription}) {


  return (
    <div className='wrapper'>
      <div className='header'>
          <AccountDetails amountOne={amountOne} setAmountOne={setAmountOne} />
          <Transfer amountOne={amountOne} setAmountOne={setAmountOne} description={description} setDescription={setDescription} />
      </div>
      <div className='footer'>
          <TransactionsTwo />
      </div>
    </div>
  )
}
