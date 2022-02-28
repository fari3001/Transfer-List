import React from 'react'

export default function TransactionsOne({amountTwo}) {
  return (
    <div className='transaction-wrapper'>
      <h2>
        Transactions  
      </h2>
      <div className='transaction-statement'>
        <p>{amountTwo}</p>
      </div>
    </div>
  )
}
