import React from 'react'
import { clearGrid } from '../actions/controls'
import ActionButton from '../containers/ActionButton'

const ClearButton = () => {
  return (
    <ActionButton classes='clear-button'
      action={clearGrid}
      buttonText='Clear' />
  )
}

export default ClearButton
