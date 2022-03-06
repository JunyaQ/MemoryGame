import './App.css';
import {useState} from 'react';


const cardimage = [
  {"src": "../public/img/card1.png"},
  {"src": "../public/img/card2.png"},
  {"src": "../public/img/card3.png"},
  {"src": "../public/img/card4.png"},
  {"src": "../public/img/card5.png"},
  {"src": "../public/img/card6.png"},
  {"src": "../public/img/card7.png"},
  {"src": "../public/img/card8.png"},
  {"src": "../public/img/card9.png"},
  {"src": "../public/img/card10.png"},
  {"src": "../public/img/card11.png"},
  {"src": "../public/img/card12.png"},
  {"src": "../public/img/card13.png"},
  {"src": "../public/img/card14.png"},
  {"src": "../public/img/card15.png"},
  {"src": "../public/img/card16.png"},
  {"src": "../public/img/card17.png"},
  {"src": "../public/img/card18.png"},
  {"src": "../public/img/card19.png"},
  {"src": "../public/img/card20.png"},

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
    console.log(finalcard);
    setturns(0);
  }
  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <button className="newgame" onClick={shufflecards}> New Game</button>
    </div>
  );
}

export default App;
