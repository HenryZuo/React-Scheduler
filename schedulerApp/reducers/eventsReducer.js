import initEvents from './Events';

export default (state = initEvents, action) => {
  switch (action.type) {
    case 'CREATE_NEW_EVENT':
      return [...state, action.eventObj]
    default:
      return state
  }
};
