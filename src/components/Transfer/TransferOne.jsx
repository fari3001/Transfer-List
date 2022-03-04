import React, {useEffect, useState, useRef} from 'react'
import send from '../../Images/send.png'

export default function TransferOne({ amountOne, totalTwo, currentFigure, setCurrentFigure,setTotalTwo, setAmountOne, description ,setDescription, total, setTotal}) {

      const handleChange = (e) => {
        let {name, value} = e.target



        setAmountOne (prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })       
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        if (amountOne.amount.length && amountOne.desc.length) {
          e.preventDefault();
          setDescription((el) => [...el, amountOne]);
          setCurrentFigure(amountOne.amount)
          console.log(currentFigure)
          setTotal (prevState => Number(prevState) - Number(currentFigure))
          setTotalTwo (prevState => Number(prevState) + Number(currentFigure))
        }
      }


  return (
    <div className='transfer-wrapper'>
        <form onSubmit={handleSubmit}>           
            <div className='transfer-amount'>
                <input onChange={handleChange} value={amountOne.amount} name="amount" type="number" placeholder='+$100.00'/>                
            </div>
            <div className='transfer-description'>          
                <input type="text" placeholder='Another transaction description' onChange={handleChange} name="desc" value={amountOne.desc} />                
            </div>
            <div className='transfer-button'>
              <input type="image" src={send} alt="Submit"/>
            </div>
        </form>
    </div>
  )
}
