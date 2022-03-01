import React, {useEffect, useState, useRef} from 'react'

export default function TransferOne({ amountTwo, setAmountTwo, setTransactionTwo }) {

      const handleChange = (e) => {
        const {name, value} = e.target

        setAmountTwo (prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        setTransactionTwo((el) => [...el, amountTwo]);
      }

  return (
    <div className='transfer-wrapper'>
        <form onSubmit={handleSubmit}>           
            <div className='transfer-amount'>
                <input onChange={handleChange} value={amountTwo.amount} name="amount" type="number" placeholder='+$100.00'/>                
            </div>
            <div className='transfer-description'>          
                <input type="text" placeholder='Another transaction description' onChange={handleChange} name="desc" value={amountTwo.desc} />                
            </div>
            <div className='transfer-button'>
                <input type="submit" value="Transfer"/>
            </div>
        </form>
    </div>
  )
}
