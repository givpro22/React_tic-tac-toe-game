import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = 'O'
  }

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  // const [activePlayer, setActivePlayer] = useState('X')
  const activePlayer = deriveActivePlayer(gameTurns)


  let gameBoard = [...initialGameBoard.map(array => [...array])]

  for (const turn of gameTurns){
      const {square, player} =turn
      const {row, col} = square

      gameBoard[row][col] = player
  }

  let winner
  for (const combination of WINNING_COMBINATIONS){
    const firstSqureSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSqureSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSqureSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSqureSymbol && firstSqureSymbol===secondSqureSymbol &&
      firstSqureSymbol === thirdSqureSymbol
    ){
      winner = firstSqureSymbol
    }
    
  }

  const hasDraw = gameTurns.length ===9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {

  const  currentPlayer = deriveActivePlayer(gameTurns)
  ///setActivePlayer((curActiePlayer) => curActiePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns]

      return updatedTurns
    })

  }

    function handleRestarting(){
      setGameTurns([])
    }

  return (
    <main>
      <div id ="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer ==='X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer ==='O'}/>
        </ol>
        {(winner|| hasDraw)&& <GameOver winner={winner} onRestart={handleRestarting}/>}
        <GameBoard 
        onSelectSquare={handleSelectSquare} 
        board = {gameBoard}
        />
      </div>
      <Log board={gameTurns}/>
    </main>
  )
}

export default App
