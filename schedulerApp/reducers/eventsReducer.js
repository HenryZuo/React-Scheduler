


export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NEW_EVENT':
      action.eventObj
      return action.slotInfo
    default:
      return state
  }
};
