export default (state = false, action) => {
  switch (action.type) {
    case 'ON_SHOW_RODAL':
      return true
    case 'ON_HIDE_RODAL':
      return false
    default:
      return state
  }
};
