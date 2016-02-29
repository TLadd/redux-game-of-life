import React, { PropTypes } from 'react'
import CellRow from './CellRow'

const CellGrid = ({cells, onClick}) => {
  function renderRows () {
    return cells.map((row, i) => {
      return (
        <CellRow key={i}
          row={row}
          rowIndex={i}
          onClick={onClick} />
      )
    })
  }

  return (
    <div className='cell-grid'>
      {renderRows()}
    </div>
  )
}

CellGrid.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
  onClick: PropTypes.func
}

export default CellGrid
