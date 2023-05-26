export const ADD_FAVORITE = 'ADD_FAVORITE';
export const SET_ASSETS = 'SET_ASSETS';
export const RESET_ASSETS = 'RESET_ASSETS';


export const addFavorite = payload => ({
  type: ADD_FAVORITE,
  payload: payload
});