import React, { useState } from 'react';
import arrow from '../assets/chevron-down.svg'
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items?.length>0 && items.map((item, index) => {
    const isActive = index === activeIndex;
    const contentStyle = {
      display: isActive ? 'block' : 'none',
    };

    return (
      <div key={index} className="accordion-item">
        <div className='accordion-header'>

        <div
          className={`accordion-title ${isActive ? 'active' : ''}`}
          onClick={() => onTitleClick(index)}
          >
          {item.question}
        </div>
        <img src={arrow}   onClick={() => onTitleClick(index)} alt='arrow-down' ></img>
          </div>
        <div className="accordion-content" style={contentStyle}>
          {item.answer}
        </div>
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
