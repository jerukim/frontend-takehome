const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

// Sample data
let emojiReactions = {
  '2024-06-24T00:00:00Z': [
    { userId: 'user1', emoji: '🚀' },
    { userId: 'user2', emoji: '😎' },
  ],
  '2024-06-24T01:00:00Z': [
    { userId: 'user3', emoji: '😡' },
    { userId: 'user4', emoji: '😭' },
  ],
}

function generateSeries() {
  const series = []

  for (let i = 0; i < 25; i++) {
    const prevClose = series[i - 1]?.close ?? 40_000
    series.push({
      open: parseFloat(prevClose.toFixed(2)),
      high: parseFloat(
        (prevClose + getRandomArbitrary(0, 1000)).toFixed(2)
      ),
      low: parseFloat(
        (prevClose - getRandomArbitrary(-1000, 0)).toFixed(2)
      ),
      close: parseFloat(
        (prevClose + getRandomArbitrary(-1000, 1000)).toFixed(2)
      ),
      time:
        new Date(
          `2024-06-24T${i.toString().padStart(2, '0')}:00:00Z`
        ).getTime() / 1000,
    })
  }

  return series
}

const series = generateSeries()

app.post('/addReaction', (req, res) => {
  const { timestamp, userId, emoji } = req.body
  if (!emojiReactions[timestamp]) {
    emojiReactions[timestamp] = []
  }
  emojiReactions[timestamp].push({ userId, emoji })
  res.status(200).send('Reaction added')
})

app.get('/getReactions', (req, res) => {
  res.json(emojiReactions)
})

app.get('/series', (req, res) => {
  res.json(series)
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
