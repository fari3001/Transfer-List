import React, {useState} from 'react'
import AccountDetails from '../Accounts/AccountDetailsTwo'
import Transfer from '../Transfer/TransferOne'
import TransactionsOne from '../Transactions/TransactionsOne'

export default function InterfaceTwo({amountOne, setAmountOne}) {

  return (
    <div className='wrapper'>
      <div className='header'>
          <AccountDetails />
          <Transfer />
      </div>
      <div className='footer'>
          <TransactionsOne amountOne={amountOne} setAmountOne={amountOne}/>
      </div>
    </div>
  )
}
