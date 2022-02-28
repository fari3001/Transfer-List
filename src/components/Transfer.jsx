import React from 'react'

export default function Transfer() {
  return (
    <div className='transfer-wrapper'>
        <div className='transfer-amount'>
            <form>           
                <input type="text" placeholder='+$100.00'/>                
            </form>
        </div>
        <div className='transfer-description'>
            <form>           
                <input type="text" placeholder='Another transaction description'/>                
            </form>
        </div>
        <div className='transfer-button'>
            <button>TRANSFER</button>
        </div>
    </div>
  )
}
