const POWER = 'POWER';
const VOLUME = 'VOLUME';
const DISPLAY = 'DISPLAY';
const BANK = 'BANK';

const rootReducer = (state = {power: true, volume: 0.5, display:'FCC Drum Machine', bank: true}, action) => {
    switch(action.type){
        case POWER:
          return Object.assign({}, state, {power: action.power});
        case VOLUME:
          return Object.assign({}, state, {volume: action.volume});
        case DISPLAY:
          return Object.assign({}, state, {display: action.display});
        case BANK:
          return Object.assign({}, state, {bank: action.bank});
        default:
          return state;
    }
}
  
export default rootReducer