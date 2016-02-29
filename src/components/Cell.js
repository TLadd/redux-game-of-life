import React, { Component, PropTypes } from 'react'

class Cell extends Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    return this.props.alive !== nextProps.alive
  }

  onClick () {
    this.props.onClick(this.props.row, this.props.column)
  }

  render () {
    let classes = 'cell'
    if (this.props.alive) {
      classes = classes + ' alive'
    }

    return (
      <div className={classes} onClick={this.onClick}>
      </div>
    )
  }
}

// const Cell = ({alive, onClick, row, column}) => {
//   function click () {
//     onClick(row, column)
//   }
//
//   let classes = 'cell'
//   if (alive) {
//     classes = classes + ' alive'
//   }
//
//   return (
//     <div className={classes} onClick={click}>
//     </div>
//   )
// }

Cell.propTypes = {
  alive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired
}

export default Cell
