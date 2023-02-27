import React from 'react';
import { useState } from 'react';
import Animal from './Animal';
import  './App.css'
function getRandomeAnimal(){
const animal=["bird","cat","cow","dog","gator","horse"];
return animal[Math.floor(Math.random()*animal.length)];
}

function App() {
  const [animal, setAnimal] = useState([]);
  const handleCick=()=>{
    setAnimal([...animal,getRandomeAnimal()]);
  }

  const renderedAnimal=animal.map((animal,index)=>{
    return <Animal type={animal} key={index}/>
  })

  return (
    <div className="app">
      <button onClick={()=>handleCick()}>Add Animal</button>
      <div className='animal-list'>{renderedAnimal}</div>
    </div>
  );
}

export default App;
