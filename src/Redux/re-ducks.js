import { combineReducers } from 'redux';
import { call, put, takeEvery } from 'redux-saga/effects'

//Actions
const PUT_DATA = 'PUT_DATA'
const LOAD_DATA = 'LOAD_DATA'
const CLICKED_ITEM = 'CLICKED_ITEM'

//Action Creators
export const putData = (data) => ({type: PUT_DATA, payload: data})
export const loadData = () => ({type: LOAD_DATA})
export const getItemId = (id) => ({type: CLICKED_ITEM, id})

//Reducer
const listInitialState = {data: [], itemId: 0,}
export const listReducer = (state = listInitialState, action) => {
    switch (action.type) {
        case PUT_DATA:
            return {
                ...state,
                data: action.payload
            }
        case CLICKED_ITEM:
            return {
                ...state,
                itemId: action.id
            }
        default:
            return state
    }
}
export const rootReducer = combineReducers({
    listState: listReducer,
})

//Saga
const url = 'http://demo2846384.mockable.io/';
export const fetchData = () => {
    return fetch(url)
        .then(response => response.json())
}

function* workerLoadData() {
    const data = yield call(fetchData);
    yield put(putData(data));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}
