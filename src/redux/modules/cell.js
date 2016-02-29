function mod (x, m) {
  return (x + m) % m
}

function getNeighbors (row, column, grid) {
  let numRows = grid.length
  let numCols = grid[0].length
  let left = mod(column - 1, numCols)
  let right = mod(column + 1, numCols)
  let up = mod(row - 1, numRows)
  let down = mod(row + 1, numRows)

  return [grid[up][left], grid[up][column], grid[up][right], grid[row][right],
    grid[down][right], grid[down][column], grid[down][left], grid[row][left]]
}

function countLiveNeighbors (row, column, grid) {
  return getNeighbors(row, column, grid).reduce((sum, n) => n ? sum + 1 : sum, 0)
}

function nextStep (row, column, alive, grid) {
  const liveNeighbors = countLiveNeighbors(row, column, grid)

  if (alive) {
    return liveNeighbors === 2 || liveNeighbors === 3
  } else {
    return liveNeighbors === 3
  }
}

function buildBoard (rows, cols, generator) {
  let board = []

  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < cols; j++) {
      row[j] = generator(i, j)
    }

    board[i] = row
  }

  return board
}

export default function cells (state = buildBoard(30, 50, () => Math.random() >= 0.5), action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return state.map((row, i) => row.map((c, j) => nextStep(i, j, c, state)))
    case 'CLICK_CELL':
      return state.map((row, i) => row.map((c, j) => action.row === i && action.column === j ? !c : c))
    case 'CLEAR_GRID':
      return buildBoard(state.length, state[0].length, () => false)
    case 'CHANGE_SIZE':
      return buildBoard(action.rows, action.columns, () => Math.random() >= 0.5)
    default:
      return state
  }
}
