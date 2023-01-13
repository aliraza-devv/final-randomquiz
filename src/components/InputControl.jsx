import React from 'react'

const InputControl = (props) => {
  return (
    <div className='input-conatiner'>
        {props.label && <label className='input-label'>{props.label}</label>}
        <input className='input-control' type='text' {...props} />
    </div>
  )
}

export default InputControl