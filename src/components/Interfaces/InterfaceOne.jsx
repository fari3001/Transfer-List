import React from 'react'
import AccountDetails from '../AccountDetails'
import Transfer from '../Transfer'
import Transactions from '../Transactions'
import '../../App.css'


export default function InterfaceOne() {
  return (
    <div className='wrapper'>
      <div className='header'>
          <AccountDetails />
          <Transfer />
      </div>
      <div className='footer'>
          <Transactions />
      </div>
    </div>
  )
}
