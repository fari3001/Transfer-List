import React, {useEffect} from 'react'

export default function TransactionsTwo({amountTwo, animationLine, currentFigure, setAnimationLine, transactionTwo, date}) {
  
//   const hello = styled.h2`
//   &:after {
//     content: " 🦄";
//   }
// `;

  useEffect(() => {
    setAnimationLine('scaleX(1)')
  }, )

  return (
    <div className='transaction-wrapper'>
      <h2 style={{transform: animationLine}}>
        Transactions  
      </h2>
        { transactionTwo && 
        <div className='transaction-header'><p>Today</p></div>
        }     
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