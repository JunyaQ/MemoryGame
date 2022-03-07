import React from "react";
import './card.css';



function Card({card, handleChoice,flip}){
  const handleClick=()=>{
    handleChoice(card);

  }
    return (
      <div className="card" >
      <div className={flip?"flip":""}>
        <img src={card.src} className='cardimage' alt="cardimage"/>
        <img src='/img/background1.jpg' className='cardbackground' alt='cardbackground' onClick={handleClick}/>
      </div>

    </div>
    )

    }

export default Card;