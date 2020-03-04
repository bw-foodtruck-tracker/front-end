import axiosWithAuth from '../../axios/index';


//Get Trucks
export const FETCH_TRUCK = "FETCH_TRUCK";
export const FETCH_SUCCESS = 'FETCH_TRUCKS';
export const FETCH_FAIL = 'FETCH_FAIL';

//Add Trucks
export const ADD_TRUCK = 'ADD_TRUCK';
export const ADD_SUCCESS = 'ADD_SUCCESS';

//Update Trucks

export const UPDATE_TRUCK = 'UPDATE_TRUCK';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

//Delete Trucks
export const DELETE_TRUCK = 'DELETE_TRUCK';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

export const fetchTrucks = () => dispatch => {
    dispatch({ type: FETCH_TRUCK })
    axiosWithAuth()
        .get('')
        .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data})) 
        .catch(error => dispatch({ type: FETCH_FAIL, payload: error.response}))
};

export const addTrucks = newTruck => dispatch => {
    dispatch({ type: ADD_TRUCK })
    axiosWithAuth()
        .post ('', newTruck)
        .then(response => dispatch({ type: ADD_SUCCESS, payload: response.data})) 
        .catch(error => dispatch({ type: FETCH_FAIL, payload: error.response}))
};

export const editTrucks = truck => dispatch => {
    dispatch({ type: UPDATE_TRUCK })
    axiosWithAuth()
        .put('', truck)
        .then(response => dispatch({ type: UPDATE_SUCCESS, payload: response.data})) 
        .catch(error => dispatch({ type: FETCH_FAIL, payload: error.response}))
};

export const deleteTrucks = truck => dispatch => {
    dispatch({ type: DELETE_TRUCK })
    axiosWithAuth()
        .delete('', truck)
        .then(response => dispatch({ type: DELETE_SUCCESS, payload: response.data})) 
        .catch(error => dispatch({ type: FETCH_FAIL, payload: error.response}))
};