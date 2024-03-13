import Crossword from '@jaredreisinger/react-crossword'
import './App.css'
import { emojisplosion, emojisplosions } from 'emojisplosion'
import { useState } from 'react'

const data = {
  across: {
    1: {
      clue: 'Best Cuz Ever',
      answer: 'ANAND',
      row: 0,
      col: 0,
    },
    4: {
      clue: '____ outside the box',
      answer: 'THINK',
      row: 3,
      col: 2,
    },
  },
  down: {
    2: {
      clue: 'Dog',
      answer: 'ANALI',
      row: 0,
      col: 0,
    },
    3: {
      clue: 'DJ Khaled, ____ One',
      answer: 'ANOTHER',
      row: 0,
      col: 2,
    },
    5: {
      clue: 'American Born Confused ____',
      answer: 'DESI',
      row: 0,
      col: 4,
    },
  },
}

function App() {
  const [solved, setSolved] = useState(false)

  if (solved) {
    return (
      <>
        <h1>Yay! You solved it!</h1>
      </>
    )
  }
  return (
    <>
      <Crossword
        useStorage={true}
        onCrosswordComplete={(correct: boolean) => {
          if (!correct) return
          setSolved(true)
          emojisplosions({
            interval: 500,
            emojis: ['🎉', '🎊', '🎈', '🟢', '✅', '💰', '👍🏽', '🕺🏽', '😁'],
            position() {
              return {
                x: Math.random() * (window.innerWidth / 2),
                y: Math.random() * ((window.innerHeight / 2) * 2) - window.innerHeight / 2,
              }
            },
          })
        }}
        onAnswerIncorrect={(direction, number, answer) => {
          const info = data[direction][number]
          // const selector = `text[x="${info.row * 10 + 5}"][y="${info.col * 10 + 6}"]`
          // const element = document.querySelector(selector)
          emojisplosion({
            emojis: ['❌', '🛑', '😭', '😑', '🙅🏽‍♀️', '🚫', '⛔️', '🙅🏽‍♂️', '👎🏽'],
            emojiCount: 20,
            position() {
              return {
                x: window.innerWidth / 2,
                y: (-window.innerHeight / 2) * 0.6,
              }
            },
          })
        }}
        onAnswerCorrect={(direction, number, answer) => {
          const info = data[direction][number]
          // const selector = `text[x="${info.row * 10 + 5}"][y="${info.col * 10 + 6}"]`
          // const element = document.querySelector(selector)
          emojisplosion({
            emojis: ['🎉', '🎊', '🎈', '🟢', '✅', '💰', '👍🏽', '🕺🏽', '😁'],
            emojiCount: 20,
            position() {
              return {
                x: window.innerWidth / 2,
                y: (-window.innerHeight / 2) * 0.6,
              }
            },
          })
        }}
        data={data}
        theme={{
          highlightBackground: 'blue',
        }}
      />
    </>
  )
}

export default App
