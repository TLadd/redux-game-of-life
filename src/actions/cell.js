export const nextStep = () => {
  return {
    type: 'NEXT_STEP'
  }
}

export const clickCell = (row, column) => {
  return {
    type: 'CLICK_CELL',
    row,
    column
  }
}
