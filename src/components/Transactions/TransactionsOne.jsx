import React from 'react'

export default function TransactionsOne({amountOne, description, date}) {
  // console.log(amountOne)

  
  return (
    <div className='transaction-wrapper'>
      <h2>
        Transactions  
      </h2>     
        {description.length > 0 && (
          <> 
            {description.map((el) => (
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
