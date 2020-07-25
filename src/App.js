import React, { useState, useEffect } from 'react';

function App() {

  let tempShipsArray = [];
  let tempClickArray = [];
  const [shipsArray, setShipsArray] = useState(makeArray());
  const [gameOver, setGameOver] = useState(false);
  const [clickCounter, setClickCounter] = useState(0);
  const [clickedPosition, setClickedPosition] = useState([])

  function makeArray(){

    let newBattleShips = [];
    let x,y,pos;

    for(let i=0;i<10;){
      x = Math.floor(Math.random()*7);
      y = Math.floor(Math.random()*7);

      pos = String(x) + String(y)

      if(newBattleShips.indexOf(pos) === -1){
        newBattleShips.push(pos);
        i++;
      }
    }

    return newBattleShips;
  }

  function clickHandler(event){

    if(gameOver){
      console.log('Refresh or Press F5 to play again');
      return;
    }

    const clickedLocation = event.target.id;
    const clickedLocationDiv = document.getElementById(clickedLocation);

    tempClickArray = clickedPosition;
    if(tempClickArray.indexOf(clickedLocation)==-1){
      tempClickArray.push(clickedLocation);
      setClickedPosition(tempClickArray);
      setClickCounter(clickCounter + 1);
    }

    if(shipsArray.indexOf(clickedLocation)!==-1){
      clickedLocationDiv.innerHTML = 'HIT';
      tempShipsArray = shipsArray;
      tempShipsArray = tempShipsArray.filter(ship => ship !== clickedLocation)
      setShipsArray(tempShipsArray)
    } else{
      clickedLocationDiv.innerHTML = 'MISS';
    }
  }

  useEffect(() => {
    console.log(clickCounter)
    if(shipsArray.length === 0){
      setGameOver(true);
      document.getElementById('heading').innerText = 'You sank them all ! Took you ' + clickCounter + ' attempts.'
    }
  })

  return (
    <div className="App">
      <h2 id="heading"> {shipsArray.length} ships left </h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td id="00" onClick={clickHandler}></td>
              <td id="01" onClick={clickHandler}></td>
              <td id="02" onClick={clickHandler}></td>
              <td id="03" onClick={clickHandler}></td>
              <td id="04" onClick={clickHandler}></td>
              <td id="05" onClick={clickHandler}></td>
              <td id="06" onClick={clickHandler}></td>
            </tr>
            <tr>
              <td id="10" onClick={clickHandler}></td>
              <td id="11" onClick={clickHandler}></td>
              <td id="12" onClick={clickHandler}></td>
              <td id="13" onClick={clickHandler}></td>
              <td id="14" onClick={clickHandler}></td>
              <td id="15" onClick={clickHandler}></td>
              <td id="16" onClick={clickHandler}></td>
            </tr>
            <tr>
              <td id="20" onClick={clickHandler}></td>
              <td id="21" onClick={clickHandler}></td>
              <td id="22" onClick={clickHandler}></td>
              <td id="23" onClick={clickHandler}></td>
              <td id="24" onClick={clickHandler}></td>
              <td id="25" onClick={clickHandler}></td>
              <td id="26" onClick={clickHandler}></td>
            </tr>
            <tr>
              <td id="30" onClick={clickHandler}></td>
              <td id="31" onClick={clickHandler}></td>
              <td id="32" onClick={clickHandler}></td>
              <td id="33" onClick={clickHandler}></td>
              <td id="34" onClick={clickHandler}></td>
              <td id="35" onClick={clickHandler}></td>
              <td id="36" onClick={clickHandler}></td>
            </tr>
            <tr>
              <td id="40" onClick={clickHandler}></td>
              <td id="41" onClick={clickHandler}></td>
              <td id="42" onClick={clickHandler}></td>
              <td id="43" onClick={clickHandler}></td>
              <td id="44" onClick={clickHandler}></td>
              <td id="45" onClick={clickHandler}></td>
              <td id="46" onClick={clickHandler}></td>
            </tr>
            <tr>
              <td id="50" onClick={clickHandler}></td>
              <td id="51" onClick={clickHandler}></td>
              <td id="52" onClick={clickHandler}></td>
              <td id="53" onClick={clickHandler}></td>
              <td id="54" onClick={clickHandler}></td>
              <td id="55" onClick={clickHandler}></td>
              <td id="56" onClick={clickHandler}></td>
            </tr>
            <tr>
              <td id="60" onClick={clickHandler}></td>
              <td id="61" onClick={clickHandler}></td>
              <td id="62" onClick={clickHandler}></td>
              <td id="63" onClick={clickHandler}></td>
              <td id="64" onClick={clickHandler}></td>
              <td id="65" onClick={clickHandler}></td>
              <td id="66" onClick={clickHandler}></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
