import './App.css';
import {useEffect, useState} from 'react';
import Card from './components/Card';


const cardimage = [
  {"src": "/img/card1.png"},
  {"src": "/img/card2.png"},
  {"src": "/img/card3.png"},
  {"src": "img/card4.png"},
  {"src": "/img/card5.png"},
  {"src": "/img/card6.png"},
  {"src": "/img/card7.png"},
  {"src": "/img/card8.png"},
  {"src": "/img/card9.png"},
  {"src": "/img/card10.png"},
  {"src": "/img/card11.png"},
  {"src": "/img/card12.png"},
  {"src": "/img/card13.png"},
  {"src": "/img/card14.png"},
  {"src": "/img/card15.png"},
  {"src": "/img/card16.png"},
  {"src": "/img/card17.png"},
  {"src": "/img/card18.png"},
  {"src": "/img/card19.png"},
  {"src": "/img/card20.png"},

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
      console.log("2");
      console.log(card);
      console.log(choiceone);
      console.log(choicetwo);
      //console.log(choicetwo.src);
    }
    else{
      setchoiceone(card); 
      console.log("1");
      console.log(card); 
    }
  }

  useEffect(()=>{
    if(choiceone&&choicetwo){
      if(choiceone.src === choicetwo.src){
        console.log("match");
        reset();
      }
      else{
        console.log("not match");
        reset();
      }
    }
    },[choiceone, choicetwo]);

  
    

  const reset =()=>{
    setchoiceone(null);
    setchoicetwo(null);
    setturns(prevTurns => prevTurns+1);
  }
  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <button className="newgame" onClick={shufflecards}> New Game</button>

      {/* display cards */}
      <div className='display'>
        {cards.map(card=>(
          <Card key={card.id} card={card} handleChoice = {handleChoice}/>
        ))}
        </div>
    </div>
  );
}

export default App;
