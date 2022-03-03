import React, {useEffect, useState, useRef} from 'react'

export default function TransferOne({ amountOne, totalTwo,setTotalTwo, setAmountOne, description ,setDescription, total, setTotal}) {

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

    //   useEffect(() => {
    //     console.log('total is: ' + total)

    // }, [total])


      const handleSubmit = (e) => {
        e.preventDefault();
        setDescription((el) => [...el, amountOne]);
        const currentFigure = amountOne.amount
        setTotal (prevState => Number(prevState) - Number(currentFigure))
        setTotalTwo (prevState => Number(prevState) + Number(currentFigure))
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
