import React, { PropTypes } from 'react'
import { changeSize } from '../actions/controls'
import ActionButton from '../containers/ActionButton'

const ChangeSizeButton = ({rows, columns}) => {
  const action = () => changeSize(rows, columns)

  return (
    <ActionButton classes='change-size-button'
      action={action}
      buttonText={`Size: ${rows}X${columns}`} />
  )
}

ChangeSizeButton.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired
}

export default ChangeSizeButton
