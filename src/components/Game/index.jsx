import {useEffect, useState} from 'react';
import Card from '../Card';
import './game.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Image from '../Image';



const cardimage = [
  {"src": Image.card1, matched:false },
  {"src": Image.card2, matched:false },
  {"src": Image.card3, matched:false },
  {"src": Image.card4, matched:false },
  {"src": Image.card5, matched:false },
  {"src": Image.card6, matched:false },
  {"src": Image.card7, matched:false },
  {"src": Image.card8, matched:false },
  {"src": Image.card9, matched:false },
  {"src": Image.card10, matched:false },
  {"src": Image.card11, matched:false },
  {"src": Image.card12, matched:false },
  {"src": Image.card13, matched:false },
  {"src": Image.card14, matched:false },
  {"src": Image.card15, matched:false },
  {"src": Image.card16, matched:false },
  {"src": Image.card17, matched:false },
  {"src": Image.card18, matched:false },
  {"src": Image.card19, matched:false },
  {"src": Image.card20, matched:false },
  {"src": Image.card21, matched:false },
  {"src": Image.card22, matched:false },
  {"src": Image.card23, matched:false },
  {"src": Image.card24, matched:false },
  {"src": Image.card25, matched:false },
  {"src": Image.card26, matched:false },
  {"src": Image.card27, matched:false },
  {"src": Image.card28, matched:false },
  {"src": Image.card29, matched:false },
  {"src": Image.card30, matched:false },
  {"src": Image.card31, matched:false },
  {"src": Image.card32, matched:false },
  {"src": Image.card33, matched:false },
  {"src": Image.card34, matched:false },
  {"src": Image.card35, matched:false },
  {"src": Image.card36, matched:false },
  {"src": Image.card37, matched:false },
  {"src": Image.card38, matched:false },
  {"src": Image.card39, matched:false },
  {"src": Image.card40, matched:false },
  {"src": Image.card41, matched:false },
  {"src": Image.card42, matched:false },
  {"src": Image.card43, matched:false },
  {"src": Image.card44, matched:false },
  {"src": Image.card45, matched:false },
  {"src": Image.card46, matched:false },
  {"src": Image.card47, matched:false },
  {"src": Image.card48, matched:false },
  {"src": Image.card49, matched:false },
  {"src": Image.card50, matched:false },







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
    original.sort(()=> Math.random()-0.5);
    for(var i =0; i<pair; i++){
      gameimage.push(original[i]);
    }
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
