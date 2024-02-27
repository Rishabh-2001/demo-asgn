import React from 'react'

const SubCard = ({sub}) => {
  return (
    <div className='sub-card'>
    <img src={sub?.icon} alt='grp1'></img>
    <div>
        <strong>{sub?.title}</strong>
        <p>{sub?.sub_title}</p>
    </div>
    </div>

  )
}

export default SubCard