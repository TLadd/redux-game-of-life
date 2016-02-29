export const startStep = () => {
  return {
    type: 'START_STEP'
  }
}

export const stopStep = () => {
  return {
    type: 'STOP_STEP'
  }
}

export const clearGrid = () => {
  return {
    type: 'CLEAR_GRID'
  }
}

export const changeSize = (rows, columns) => {
  return {
    type: 'CHANGE_SIZE',
    rows,
    columns
  }
}
