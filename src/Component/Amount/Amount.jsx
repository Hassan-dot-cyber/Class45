import React from 'react'

function Amount(props) {
  return (
    <div className='flex flex-col'>
        <div className='text-2xl font-semibold '>{`$${props.amount}`}</div>
        <div className='text-gray-400 text-xs'>{props.des}</div>
    </div>
  )
}

export default Amount