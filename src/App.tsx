import Crossword from '@jaredreisinger/react-crossword'
import './App.css'
import { emojisplosion, emojisplosions } from 'emojisplosion'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

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

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!solved) return
      const x = event.clientX
      const y = event.clientY
      console.log(`Clicked at (${x}, ${y})`)
      emojisplosion({
        emojis: ['🎉', '🎊', '🎈', '🟢', '✅', '💰', '👍🏽', '🕺🏽', '😁'],
        position() {
          return {
            x,
            y: y - window.innerHeight / 2,
          }
        },
      })
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [solved])

  if (solved) {
    return (
      <>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
        <h1>Yay! You solved it!</h1>
        <h1>Tulsi and Rishi are happy</h1>
      </>
    )
  }

  return (
    <div>
      <h4>Let's see how well you know the couple!</h4>
      <p>Solve the following crossword puzzle</p>
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
        onAnswerIncorrect={() => {
          // const info = data[direction][number]
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
        onAnswerCorrect={() => {
          // const info = data[direction][number]
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
    </div>
  )
}

export default App
