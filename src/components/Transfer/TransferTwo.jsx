import React, {useEffect, useState, useRef} from 'react'
import send from '../../Images/send.png'

export default function TransferOne({ amountTwo, totalTwo, setAmountTwo, currentFigure, setCurrentFigure, setTotal, setTotalTwo, setTransactionTwo }) {

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
        if (amountTwo.amount.length && amountTwo.desc.length) {
        setTransactionTwo((el) => [...el, amountTwo]);
        const dynamicFigure = amountTwo.amount
        setCurrentFigure(Number(dynamicFigure))
        setTotal (prevState => Number(prevState) + Number(dynamicFigure))
        setTotalTwo (prevState => Number(prevState) - Number(dynamicFigure))
        console.log('this is the totalTwo amount ' + currentFigure)
        }
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
                <input type="image" src={send} alt="Submit"/>
            </div>
        </form>
    </div>
  )
}
