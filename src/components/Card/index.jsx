import React from "react";
import './card.css';




function Card({card, handleChoice,flip,disable}){
  const handleClick=()=>{
    if(!disable){
      handleChoice(card);
    }
    

  }
    return (
      <div className="card" >
      <div className={flip?"flip":""}>
        <img src={card.src} className='cardimage' alt="cardimage"/>
        <img src={require('../../img/background1.jpg')} className='cardbackground' alt='cardbackground' onClick={handleClick}/>
      </div>

    </div>
    )

    }

export default Card;