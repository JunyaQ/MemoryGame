import './App.css';
import {useState} from 'react';
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
  }
  console.log(cards,turns);

  const handleChoice=(card)=>{
    //console.log(card);
    if(choiceone!==null){
      //console.log("2");
      //console.log(card);
      setchoicetwo(card);
      if(choiceone.src === choicetwo.src){
        // no flip back and set unclickable
        setchoiceone(null);
        setchoicetwo(null);
        console.log(choiceone);
        console.log(choicetwo);
      }
      else{
        //flip back and wait for next try
        setchoiceone(null);
        setchoicetwo(null);
        console.log(choiceone);
        console.log(choicetwo);
      }
    }
    else{
     // console.log("1");
      //console.log(card);
      setchoiceone(card); 
    }

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
