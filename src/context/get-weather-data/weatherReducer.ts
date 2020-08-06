import { FETCH_WEATHER_DATA_SUCCESS } from '../actionTypes';

export default (state: any, action: any) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
