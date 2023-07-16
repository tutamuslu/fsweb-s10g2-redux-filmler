import { REMOVE_FAVORITE, ADD_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            if(state.favorites.find(x => x.id === action.payload.id)){
                return state
            }
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(x => x.id !== action.payload)
            }
            case TOGGLE_FAVORITES:
                return {
                    ...state,
                    displayFavorites: !state.displayFavorites
                }
        default:
            return state;
    }
}

export default reducer;