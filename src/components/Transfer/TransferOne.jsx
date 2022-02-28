import React, {useEffect, useState} from 'react'

export default function TransferOne({amountOne, setAmountOne, description, setDescription}) {

    useEffect(() => {
        console.log(amountOne)
    }, [amountOne])

  return (
    <div className='transfer-wrapper'>
        <div className='transfer-amount'>
            <form>           
                <input onChange={(e) => setAmountOne(e.target.value)} value={amountOne} type="text" placeholder='+$100.00'/>                
            </form>
        </div>
        <div className='transfer-description'>
            <form>           
                <input type="text" placeholder='Another transaction description' onChange={(e) => setDescription(e.target.value)} value={description} />                
            </form>
        </div>
        <div className='transfer-button'>
            <button>TRANSFER</button>
        </div>
    </div>
  )
}
