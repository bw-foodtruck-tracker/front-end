import { 
    FETCH_TRUCK,
    FETCH_SUCCESS,
    FETCH_FAIL,
    ADD_TRUCK,
    ADD_SUCCESS,
    UPDATE_TRUCK,
    UPDATE_SUCCESS,
    DELETE_TRUCK,
    DELETE_SUCCESS
} from '../actions'

const initialState = {
    trucks: [],
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: null
}

export const trucksReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TRUCK:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                trucks: action.payload
            }
        case ADD_TRUCK:
            return {
                ...state,
                isAdding: true,
                error: null
            }
        case ADD_SUCCESS:
            return {
                ...state,
                isAdding: false,
                trucks: [...state.trucks, action.payload]
            }
            case UPDATE_TRUCK:
            return {
                ...state,
                isUpdating: true,
                error: null
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                trucks: [...state.trucks, action.payload]
            }
        case DELETE_TRUCK:
            return {
                ...state,
                isDeleting: true,
                error: null
            } 
        case DELETE_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                trucks: state.trucks.filter(truck => {
                    return truck.id !== action.payload
                })
            } 
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                isAdding: false,
                isUpdating: false,
                isDeleting: false,
                err: action.payload
            }
        default:
            return state;
    }
}

