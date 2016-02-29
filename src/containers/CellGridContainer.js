import { connect } from 'react-redux'
import { clickCell } from '../actions/cell'
import CellGrid from '../components/CellGrid'

const mapStateToProps = (state) => {
  return {
    cells: state.cells
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (row, column) => {
      dispatch(clickCell(row, column))
    }
  }
}

const CellGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CellGrid)

export default CellGridContainer
