import { ADD_FAVORITE, SET_ASSETS } from "./action";


const initialState = {
  assets: [],
  favorites: []
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ASSETS: {
        return {
            ...state,
            assets: [ ...state.assets, action.payload]
        };
    }
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [ ...state.favorites, action.payload]
      };
    }
    default:
      return state;
  }
}

export default appReducer;