import React from 'react'
import Account from '../../Accounts.json'
import '../../App.css'

export default function AccountDetails({total, amountOne, setTotal, description}) {
  const Accounts = Account.accounts
  const currentFigure = amountOne.amount
  const firstClient = Accounts[0]
 
  let colourConfirmation = 'white'
  

  // console.log('this is the current ' + currentFigure + ' this is the total ' + total)
  if (total >=  currentFigure) {
     colourConfirmation = 'white'
  } else {
     colourConfirmation = 'red'
  }
  
  return (
    <div className='account-wrapper'>          
              <div className='flex-wrapper'> 
                <h1>{firstClient.name}</h1>
                  <h2 style={{color: colourConfirmation}}>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</h2> 
              </div>
                   
        <div className='account-number'>
            <h2>Acc: {firstClient.account}</h2>
        </div>
    </div>
  )
}
