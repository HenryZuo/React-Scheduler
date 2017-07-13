export default (state = {}, action) => {
  switch (action.type) {
    case 'NEW_EVENT_TIME':
      return action.slotInfo
    default:
      return state
  }
};
