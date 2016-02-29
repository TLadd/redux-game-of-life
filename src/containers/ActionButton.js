import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

let ActionButton = ({ onClick, classes, buttonText }) => {
  return (
    <button className={classes} onClick={onClick}>
      {buttonText}
    </button>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(ownProps.action())
    }
  }
}

ActionButton = connect(null, mapDispatchToProps)(ActionButton)

ActionButton.propTypes = {
  action: PropTypes.func,
  classes: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func
}

export default ActionButton
