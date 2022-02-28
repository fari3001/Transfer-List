import React, {useEffect, useState, useRef} from 'react'

export default function TransferOne({amountOne, setAmountOne, description, setDescription}) {

    // useEffect(() => {
    //     console.log(amountOne)
    // }, [amountOne])
    // const whatif = useRef(e.target.value)

    let submit = (e) => {
        e.preventDefault();
        // let keyword = e.target.elements.keyword.value;
        console.log('submitted');
        setAmountOne(amountOne)
      }


  return (
    <div className='transfer-wrapper'>
        <form onSubmit={submit}>           
            <div className='transfer-amount'>
                <input onChange={(e) => e.target.value} value={amountOne} type="text" placeholder='+$100.00'/>                
            </div>
            <div className='transfer-description'>          
                <input type="text" placeholder='Another transaction description' onChange={(e) => setDescription(e.target.value)} value={description} />                
            </div>
            <div className='transfer-button'>
                <input type="submit" value="Transfer"/>
            </div>
        </form>
    </div>
  )
}
