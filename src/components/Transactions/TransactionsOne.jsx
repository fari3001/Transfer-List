import React from 'react'

export default function TransactionsOne({amountOne}) {
  // console.log(amountOne)
  
  return (
    <div className='transaction-wrapper'>
      <h2>
        Transactions  
      </h2>
      <div className='transaction-statement'>
        <p>{amountOne}</p>
      </div>
    </div>
  )
}
