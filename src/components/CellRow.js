import React, { PropTypes } from 'react'
import Cell from './Cell'

const CellRow = ({row, rowIndex, onClick}) => {
  function renderCells () {
    return row.map((c, i) => {
      return (
        <Cell key={i}
          alive={c}
          row={rowIndex}
          column={i}
          onClick={onClick} />
      )
    })
  }

  return (
    <div className='cell-row'>
      {renderCells()}
    </div>
  )
}

CellRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.bool),
  rowIndex: PropTypes.number,
  onClick: PropTypes.func
}

export default CellRow
