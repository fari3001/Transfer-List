import React from 'react'
import '../../App.css'

export default function AccountDetails({transactionTwo}) {
  return (
    <div className='account-wrapper'>
        <div className='flex-wrapper'>
            <h1>Jack Doe</h1>
            <h2>$8 000.00</h2>
        </div>
        <div className='account-number'>
            <h2>Acc: 874625</h2>
        </div>
    </div>
  )
}
