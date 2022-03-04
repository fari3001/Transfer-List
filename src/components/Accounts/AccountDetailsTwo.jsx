import React from 'react'
import Account from '../../Accounts.json'
import '../../App.css'

export default function AccountDetails({totalTwo, amountOne, currentFigure, setTotal, transactionTwo}) {
  const Accounts = Account.accounts
  // const currentFigure = amountOne.amount
  const secondClient = Accounts[1]
  let colourConfirmation = 'white'


  if (totalTwo >=  currentFigure) {
    colourConfirmation = 'white'
 } else {
    colourConfirmation = 'red'
 }

  return (
    <div className='account-wrapper'>
        <div className='flex-wrapper'>
            <h1>{secondClient.name}</h1>
            <h2 style={{ color: colourConfirmation }} >${totalTwo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h2>
        </div>
        <div className='account-number'>
            <h2>Acc: {secondClient.account}</h2>
        </div>
    </div>
  )
}
