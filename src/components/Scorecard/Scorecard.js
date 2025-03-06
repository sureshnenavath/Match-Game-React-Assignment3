import React from 'react'

const Scorecard = ({score, onPlayAgain}) => {
  return (
    <div className="scorecard-container">
      <h1>GAME OVER</h1>
      <p>Your Score</p>
      <h2>{score}</h2>
      <button onClick={onPlayAgain}>PLAY AGAIN</button>
    </div>
  )
}

export default Scorecard
