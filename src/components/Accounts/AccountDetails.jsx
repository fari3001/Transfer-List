import React from 'react'
import Account from '../../Accounts.json'
import '../../App.css'

export default function AccountDetails({total, setTotal, description}) {
  const Accounts = Account.accounts
  console.log(description.length)
  

  return (
    <div className='account-wrapper'>
            
              <div className='flex-wrapper'> 
                <h1>{Accounts[0].name}</h1>
                
                  <h2>${total}</h2> 
                
           
              </div>
            
        
        <div className='account-number'>
            <h2>Acc: {Accounts[0].account}</h2>
        </div>
    </div>
  )
}
