import React, {useState} from 'react'
import AccountDetails from '../Accounts/AccountDetailsTwo'
import Transfer from '../Transfer/TransferTwo'
import TransactionsOne from '../Transactions/TransactionsOne'

export default function InterfaceTwo({amountOne, setAmountOne, amountTwo, setAmountTwo, description, date, total, setTotal, transactionTwo, setTransactionTwo}) {

  return (
    <div className='wrapper'>
      <div className='header'>
          <AccountDetails amountTwo={amountTwo} total={total} setTotal={setTotal} transactionTwo={transactionTwo} />
          <Transfer amountTwo={amountTwo} setAmountTwo={setAmountTwo} transactionTwo={transactionTwo} setTransactionTwo={setTransactionTwo} />
      </div>
      <div className='footer'>
          <TransactionsOne amountOne={amountOne} setAmountOne={setAmountOne} description={description} date={date} />
      </div>
    </div>
  )
}
