import React from 'react'
import '../App.css'

export default function AccountDetails() {
  return (
    <div className='account-wrapper'>
        <div className='flex-wrapper'>
            <h1>John Smith</h1>
            <h2>$10000</h2>
        </div>
        <div className='account-number'>
            <h2>Acc: 123456</h2>
        </div>
    </div>
  )
}
