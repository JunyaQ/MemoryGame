import './App.css';
import {useEffect, useState} from 'react';
import Card from './components/Card';


const cardimage = [
  {"src": "/img/card1.png", matched:false },
  {"src": "/img/card2.png", matched:false },
  {"src": "/img/card3.png", matched:false },
  {"src": "img/card4.png", matched:false },
  {"src": "/img/card5.png", matched:false },
  {"src": "/img/card6.png", matched:false },
  {"src": "/img/card7.png", matched:false },
  {"src": "/img/card8.png", matched:false },
  {"src": "/img/card9.png", matched:false },
  {"src": "/img/card10.png", matched:false },
  {"src": "/img/card11.png", matched:false },
  {"src": "/img/card12.png", matched:false },
  {"src": "/img/card13.png", matched:false },
  {"src": "/img/card14.png", matched:false },
  {"src": "/img/card15.png", matched:false },
  {"src": "/img/card16.png", matched:false },
  {"src": "/img/card17.png", matched:false },
  {"src": "/img/card18.png", matched:false },
  {"src": "/img/card19.png", matched:false },
  {"src": "/img/card20.png", matched:false },

]

function App() {
  const [cards, setcards] = useState([]);
  const [turns, setturns] = useState(0);

  const [choiceone, setchoiceone] = useState(null);
  const[choicetwo, setchoicetwo] = useState(null);

  //shuffle
  const shufflecards = ()=>{
    const doubled = [...cardimage, ...cardimage];
    const shufflecard= doubled.sort(()=>Math.random()-0.5);
    const finalcard = shufflecard.map((card)=>({...card,id:Math.random()}));
    setcards(finalcard);
    setturns(0);
    //reset();
  }
  console.log(cards,turns);

  const handleChoice=(card)=>{
    //console.log(card);
    if(choiceone!==null){
      setchoicetwo(card);
      // console.log("2");
      // console.log(card);
      // console.log(choiceone);
      // console.log(choicetwo);
      //console.log(choicetwo.src);
    }
    else{
      setchoiceone(card); 
      //console.log("1");
      //console.log(card); 
    }
  }

  useEffect(()=>{
    if(choiceone&&choicetwo){
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
        console.log("not match");
        reset();
      }
    }
    },[choiceone, choicetwo]);
    console.log(cards);

  
    

  const reset =()=>{
    setTimeout(() => {
    setchoiceone(null);
    setchoicetwo(null);
    }, 1500);
    
    setturns(prevTurns => prevTurns+1);
  }
  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <button className="newgame" onClick={shufflecards}> New Game</button>

      {/* display cards */}
      <div className='display'>
        {cards.map(card=>(
          <Card key={card.id} card={card} handleChoice = {handleChoice} flip={card === choiceone|| card === choicetwo|| card.matched === true}/>
        ))}
        </div>
    </div>
  );
}

export default App;
