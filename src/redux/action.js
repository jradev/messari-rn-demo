export const ADD_FAVORITE = 'ADD_FAVORITE';
export const SET_ASSETS = 'SET_ASSETS';
export const SELECT_ASSET = 'SELECT_ASSET';
export const RESET_ASSETS = 'RESET_ASSETS';


export const addFavorite = payload => ({
  type: ADD_FAVORITE,
  payload: payload
});

export const setAssets = payload => ({
  type: SET_ASSETS,
  payload: payload
});

export const selectAsset = payload => ({
  type: SELECT_ASSET,
  payload: payload
});