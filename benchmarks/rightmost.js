const TextBuffer = require('..')

// Editing the longest screen line without extending it forces the display
// layer to re-derive the rightmost screen position on every change.

const ROW_COUNT = 1000000
const lines = new Array(ROW_COUNT)
for (let row = 0; row < ROW_COUNT; row++) {
  lines[row] = 'x'.repeat(10 + (row % 20))
}
lines[ROW_COUNT - 1] = 'y'.repeat(2000)

const buffer = new TextBuffer({text: lines.join('\n')})
const displayLayer = buffer.addDisplayLayer({})
displayLayer.getScreenLines()

const longRow = ROW_COUNT - 1
let t0 = Date.now()

for (let i = 0; i < 1000; i++) {
  const column = buffer.lineLengthForRow(longRow)
  buffer.setTextInRange([[longRow, column - 1], [longRow, column]], '')
}

let t1 = Date.now()

const {row, column} = displayLayer.getRightmostScreenPosition()
if (row !== longRow || column !== 2000 - 1000) {
  throw new Error(`unexpected rightmost position: (${row}, ${column})`)
}

console.log('Rightmost screen position maintenance')
console.log('------------')
console.log('1000 deletions on the longest line: %s ms', t1 - t0)
