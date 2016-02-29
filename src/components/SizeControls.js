import React from 'react'
import ChangeSizeButton from '../components/ChangeSizeButton'

const SizeControls = () => {
  return (
    <div className='size-controls'>
      <ChangeSizeButton rows={30} columns={50}/>
      <ChangeSizeButton rows={50} columns={70}/>
      <ChangeSizeButton rows={80} columns={100}/>
    </div>
  )
}

export default SizeControls
