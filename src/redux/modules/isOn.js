export default function cells (state = true, action) {
  switch (action.type) {
    case 'START_STEP':
      return true
    case 'STOP_STEP':
      return false
    default:
      return state
  }
}
