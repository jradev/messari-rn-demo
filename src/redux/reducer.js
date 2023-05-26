import { ADD_FAVORITE, SELECT_ASSET, SET_ASSETS } from "./action";


const initialState = {
  assets: [],
  favorites: [],
  asset: {}
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ASSET: {
        return {
            ...state,
            asset: action.payload
        };
    }
    case SET_ASSETS: {
        return {
            ...state,
            assets: action.payload
        };
    }
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: action.payload
      };
    }
    default:
      return state;
  }
}

export default appReducer;