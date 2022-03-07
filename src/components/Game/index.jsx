import {useEffect, useState} from 'react';
import Card from '../Card';
import './game.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import card1 from '../../img/card1.png';
import card2 from '../../img/card2.png';
import card3 from '../../img/card3.png';
import card4 from '../../img/card4.png';



const cardimage = [
  {"src": card1, matched:false },
  {"src": card2, matched:false },
  {"src": card3, matched:false },
  {"src": card4, matched:false },
  // {"src": "../../img/card5.png", matched:false },
  // {"src": "../../img/card6.png", matched:false },
  // {"src": "../../img/card7.png", matched:false },
  // {"src": "../../img/card8.png", matched:false },
  // {"src": "../../img/card9.png", matched:false },
  // {"src": "../../img/card10.png", matched:false },
  // {"src": "../../img/card11.png", matched:false },
  // {"src": "../../img/card12.png", matched:false },
  // {"src": "../../img/card13.png", matched:false },
  // {"src": "../../img/card14.png", matched:false },
  // {"src": "../../img/card15.png", matched:false },
  // {"src": "../../img/card16.png", matched:false },
  // {"src": "../../img/card17.png", matched:false },
  // {"src": "../../img/card18.png", matched:false },
  // {"src": "../../img/card19.png", matched:false },
  // {"src": "../../img/card20.png", matched:false },
  // {"src": "../../img/card21.png", matched:false },
  // {"src": "../../img/card22.png", matched:false },
  // {"src": "../../img/card23.png", matched:false },
  // {"src": "../../img/card24.png", matched:false },
  // {"src": "../../img/card25.png", matched:false },
  // {"src": "../../img/card26.png", matched:false },
  // {"src": "../../img/card27.png", matched:false },
  // {"src": "../../img/card28.png", matched:false },
  // {"src": "../../img/card29.png", matched:false },
  // {"src": "../../img/card30.png", matched:false },
  // {"src": "../../img/card31.png", matched:false },
  // {"src": "../img/card32.png", matched:false },
  // {"src": "../img/card33.png", matched:false },
  // {"src": "../img/card34.png", matched:false },
  // {"src": "../img/card35.png", matched:false },
  // {"src": "../img/card36.png", matched:false },
  // {"src": "../img/card37.png", matched:false },
  // {"src": "../img/card38.png", matched:false },
  // {"src": "../img/card39.png", matched:false },
  // {"src": "../img/card40.png", matched:false },
  // {"src": "../img/card41.png", matched:false },
  // {"src": "../img/card42.png", matched:false },
  // {"src": "../img/card43.png", matched:false },
  // {"src": "../img/card44.png", matched:false },
  // {"src": "../img/card45.png", matched:false },
  // {"src": "../img/card46.png", matched:false },
  // {"src": "../img/card47.png", matched:false },
  // {"src": "../img/card48.png", matched:false },
  // {"src": "../img/card49.png", matched:false },
  // {"src": "../img/card50.png", matched:false },







]

function Game() {
  const gameimage =[];

  const [cards, setcards] = useState([]);
  const [turns, setturns] = useState(0);

  const [choiceone, setchoiceone] = useState(null);
  const[choicetwo, setchoicetwo] = useState(null);

  const [disable, setdisable] = useState(false);

  const [ value, setValue ] = useState(0); 
  // generate card
  const generatecard = (value)=>{
    const pair = value/2;
    const original = [...cardimage];
    for(var i = 0; i<pair; i++){
      
      var random = Math.floor(Math.random()*(original.length-1));
      console.log("random"+random);
      gameimage.push(cardimage[random]);
      original.splice(random,1);
      console.log(original.length);
     // console.log(cardimage.at(random));
    }
    console.log("GAME IMAGE");
    console.log(gameimage);
  }

  //shuffle
  const shufflecards = ()=>{
    generatecard(value);
    const doubled = [...gameimage, ...gameimage];
    const shufflecard= doubled.sort(()=>Math.random()-0.5);
    const finalcard = shufflecard.map((card)=>({...card,id:Math.random()}));
    setcards(finalcard);
    setchoiceone(null);
    setchoicetwo(null);
    setturns(0);
  }
  console.log(cards,turns);

  const handleChoice=(card)=>{
    //console.log(card);
    if(choiceone!==null){
      setchoicetwo(card);
    }
    else{
      setchoiceone(card); 
    }
  }
  useEffect((wincounter,value)=>{
 
    if(choiceone&&choicetwo){
      setdisable(true);
      if(choiceone.src === choicetwo.src){
        // console.log("match");
        setcards(allchoice =>{
          return allchoice.map(card=>{
            if(card.src === choiceone.src){
              return{
                ...card, matched:true// all card obj
              }
            }
            else{
              return card;
            }
          })
        })

        reset();
      }
      else{
        //console.log("not match");
        reset();
      }
    }
    },[choiceone, choicetwo]);
    //console.log(cards);

  
    

  const reset =()=>{
    setTimeout(() => {
    setchoiceone(null);
    setchoicetwo(null);
    }, 1500);
    
    setturns(prevTurns => prevTurns+1);
    setdisable(false);
  }
  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <div className='border'>
    <RangeSlider
      value={value}
      onChange={changeEvent => setValue(changeEvent.target.value)}
      min={4}
      max={100}
      step={4}
      size='lg'
      variant='dark'
    />
      <button className="newgame" onClick={shufflecards}> New Game</button>
      </div>

      {/* display cards */}
      <div className='display'>
        {cards.map(card=>(
          <Card key={card.id} card={card} handleChoice = {handleChoice} flip={card === choiceone|| card === choicetwo|| card.matched === true} disable={disable}/>
        ))}
        </div>
        <p>Turns: {turns}</p>
    </div>
  );
}

export default Game;
