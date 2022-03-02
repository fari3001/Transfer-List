import React from 'react'

export default function TransactionsTwo({amountTwo, transactionTwo, date}) {

  return (
    <div className='transaction-wrapper'>
      <h2>
        Transactions  
      </h2>     
        {transactionTwo?.length > 0 && (
          <> 
            {transactionTwo.map((el) => (
              <div className='transaction-statement'>
                <p>{date}</p>
                <p>{el.desc}</p>
                <p>${el.amount}</p>
              </div>
            ))}
          </>
        )}
    </div>
  )
}