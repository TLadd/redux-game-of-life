/* @flow */
import React from 'react'
import CellGridContainer from '../../containers/CellGridContainer'
import HeaderControls from '../../components/HeaderControls'
import SizeControls from '../../components/SizeControls'

export class HomeView extends React.Component {
  render () {
    return (
      <div>
        <h1>Redux Game Of Life</h1>
        <HeaderControls />
        <CellGridContainer />
        <SizeControls />
      </div>
    )
  }
}

export default HomeView
