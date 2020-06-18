import { takeEvery } from 'redux-saga/effects'

const { listInitialState, listReducer, PUT_DATA, LOAD_DATA, loadData, putData, watchLoadData, workerLoadData } = require('./re-ducks')

describe('Re-ducks unit-tests', () => {
  
  describe('Reducer unit-tests', () => {
    it('PUT_DATA test', () => {
      const action = {
        type: PUT_DATA
      }
      expect(listReducer(listInitialState, action)).toEqual({
        ...listInitialState,
        data: undefined,
      })
    })
    
    it('LOAD_DATA test', () => {
      const action = {
        type: LOAD_DATA,
        payload: []
      }
      expect(listReducer(listInitialState, action)).toEqual({
        ...listInitialState,
        data: action.payload,
      })
    })
  });
  
  describe('Action creators unit-tests', () => {
    it('putData test', () => {
      expect(putData()).toEqual({
        type: PUT_DATA,
        payload: undefined
      })
    })
    it('loadData test', () => {
      expect(loadData()).toEqual({
        type: LOAD_DATA,
      })
    })
  })
  
  describe('Redux-Saga unit-tests', () => {
    it('Saga`s watcher test', () => {
      const generator = watchLoadData();
      
      expect(generator.next().value).toEqual(takeEvery(LOAD_DATA, workerLoadData));
      expect(generator.next().done).toBeTruthy();
    });
  })
});
