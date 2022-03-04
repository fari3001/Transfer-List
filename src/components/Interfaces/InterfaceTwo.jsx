import React, {useState} from 'react'
import AccountDetails from '../Accounts/AccountDetailsTwo'
import Transfer from '../Transfer/TransferTwo'
import TransactionsOne from '../Transactions/TransactionsOne'

export default function InterfaceTwo({amountOne, setAmountOne, currentFigure, setCurrentFigure, amountTwo, setAmountTwo, description, date, totalTwo, setTotal, setTotalTwo, transactionTwo, setTransactionTwo}) {

  return (
    <div className='wrapper'>
      <div className='header'>
          <AccountDetails totalTwo={totalTwo} amountOne={amountOne} currentFigure={currentFigure} setTotal={setTotal} transactionTwo={transactionTwo} />
          <Transfer amountTwo={amountTwo} setAmountTwo={setAmountTwo} currentFigure={currentFigure} setCurrentFigure={setCurrentFigure} setTotal={setTotal} setTotalTwo={setTotalTwo} transactionTwo={transactionTwo} setTransactionTwo={setTransactionTwo} />
      </div>
      <div className='footer'>
          <TransactionsOne amountOne={amountOne} setAmountOne={setAmountOne} currentFigure={currentFigure} description={description} date={date} />
      </div>
    </div>
  )
}
