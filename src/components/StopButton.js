import React from 'react'
import { stopStep } from '../actions/controls'
import ActionButton from '../containers/ActionButton'

const StopButton = () => {
  return (
    <ActionButton classes='stop-button'
      action={stopStep}
      buttonText='Stop' />
  )
}

export default StopButton
