import React from 'react'

function Input(props) {
  return (
    <input type={props.type} onChange={props.onChange} placeholder={props.place} className={props.style}/>
  )
}

export default Input