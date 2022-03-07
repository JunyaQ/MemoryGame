import './App.css';
import {useState} from 'react';


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
  //shuffle
  const shufflecards = ()=>{
    const doubled = [...cardimage, ...cardimage];
    const shufflecard= doubled.sort(()=>Math.random()-0.5);
    const finalcard = shufflecard.map((card)=>({...card,id:Math.random()}));
    setcards(finalcard);
    setturns(0);
  }
  console.log(cards,turns);
  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <button className="newgame" onClick={shufflecards}> New Game</button>

      {/* display cards */}
      <div className='display'>
        {cards.map(card=>(
          <div key={card.id}>
            <div>
              <img src={card.src} className='cardimage' alt="cardimage"/>
              <img src='/img/background1.jpg' className='cardbackground' alt='cardbackground'/>
            </div>

          </div>
        ))}
        </div>
    </div>
  );
}

export default App;
