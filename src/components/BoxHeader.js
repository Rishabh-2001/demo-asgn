import React from 'react'

const BoxHeader = ({box}) => {
  return (
    <div className={`box ${box?.className}`}>
    <p className='heading'>{box?.label}</p>
    <p className='number'>{box?.stat}</p>
  </div>
  )
}

export default BoxHeader