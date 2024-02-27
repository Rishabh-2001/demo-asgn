import React from 'react'
import tick from '../assets/Vector (6).svg'
import blank from '../assets/Group 7956.svg'


const PlanCard = ({plan}) => {
  return (
    <div className={`plan-card ${plan?.is_special ? "gradient-border-container": ""}`}>
    {plan?.is_selected &&  <div className='header-plan-card'>Active Plan</div>}
    <div className={`plan-card-content ${plan?.is_special ? "gradient-border": ""} `}>

    <div className='card-outer-container'>
        <div className='card-inner-container'>
      {plan?.is_selected ?  <img src={tick} alt='tick' width={15}></img>: 
      <img src={blank} alt='tick' width={15}></img>
      }
        <div>
            <span className='amt-primary'>{plan?.discounted_price}/</span>
            <span className='amt-time'> {plan?.duration_text}</span>
            <div className='amt-off-div'>
            <p className='amt-secondary'>{plan?.original_price}</p>
            {plan?.coupons && plan?.coupons?.length>0 &&   <p className='discount-off'> {plan?.coupons[0].coupon_benefit}</p>}
            </div>
        </div>
                
        </div>
        <p>{plan?.display_title} Month</p>

    </div>
             
    </div>

</div>
  )
}

export default PlanCard