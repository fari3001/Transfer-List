import React from 'react'
import Account from '../../Accounts.json'
import '../../App.css'

export default function AccountDetails({amountOne, total, setTotal, description}) {
  const Accounts = Account.accounts
  // console.log(description)

  return (
    <div className='account-wrapper'>
            
              <div className='flex-wrapper'> 
                <h1>{Accounts[0].name}</h1>
                {
                  description.length > 0 ? <h2>${description.map((el) => setTotal(el.amount))}</h2> : <h2>${total}</h2>
                }
                
              </div>
            
        
        <div className='account-number'>
            <h2>Acc: {Accounts[0].account}</h2>
        </div>
    </div>
  )
}
