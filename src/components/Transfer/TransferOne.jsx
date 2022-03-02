import React, {useEffect, useState, useRef} from 'react'

export default function TransferOne({ amountOne, setAmountOne, description ,setDescription, total, setTotal}) {

      const handleChange = (e) => {
        const {name, value} = e.target

        setAmountOne (prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
       
        // console.log("value typed is", value)
      }


      const handleSubmit = (e) => {
        e.preventDefault();
        setDescription((el) => [...el, amountOne]);
        description.map((el) => setTotal(el.amount))
        setTotal (prevState => Number(prevState) + Number(total))
        console.log('total is: ' + total)
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
                <input type="submit" value="Transfer"/>
            </div>
        </form>
    </div>
  )
}
