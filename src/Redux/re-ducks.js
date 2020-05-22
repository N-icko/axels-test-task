import { combineReducers } from 'redux';
import { call, put, takeEvery } from 'redux-saga/effects'

//Actions
export const PUT_DATA = 'PUT_DATA'
export const LOAD_DATA = 'LOAD_DATA'

//Action Creators
export const putData = (data) => ({ type: PUT_DATA, payload: data })
export const loadData = () => ({ type: LOAD_DATA })

//Reducer
export const listInitialState = { data: [] }
export const listReducer = (state = listInitialState, action) => {
    switch (action.type) {
        case PUT_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
export const rootReducer = combineReducers({
    listState: listReducer,
})

//Saga
export const url = 'http://demo2846384.mockable.io/';
export const fetchData = () => {
    return fetch(url)
        .then(response => response.json())
}

export function* workerLoadData() {
    const data = yield call(fetchData);
    yield put(putData(data));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}
