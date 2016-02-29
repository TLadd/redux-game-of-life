import React from 'react'
import StartButton from '../components/StartButton'
import StopButton from '../components/StopButton'
import ClearButton from '../components/ClearButton'

const HeaderControls = () => {
  return (
    <div className='header-controls'>
      <StartButton />
      <StopButton />
      <ClearButton />
    </div>
  )
}

export default HeaderControls
