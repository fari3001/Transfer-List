import React from 'react'

export default function TransactionsOne({amountOne, currentFigure, description, date}) {
  
  return (
    <div className='transaction-wrapper'>
      <h2>
        Transactions  
      </h2>     
        { description && 
        <div className='transaction-header'><p>Today</p></div>
        }
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
