import React from 'react'
import { startStep } from '../actions/controls'
import ActionButton from '../containers/ActionButton'

const StartButton = () => {
  return (
    <ActionButton classes='start-button'
      action={startStep}
      buttonText='Start' />
  )
}

export default StartButton
