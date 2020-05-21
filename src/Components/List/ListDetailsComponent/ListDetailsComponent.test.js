import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import ListDetailsComponent  from './ListDetailsComponent';

describe('ListDetailsComponent tests', () => {
    it('Create ListDetailsComponent snapshot', () => {
        const mockStore = configureStore();
        const initialState = {};
        const store = mockStore(initialState);
        const wrapper = shallow(
            <Provider store={store}>
                <ListDetailsComponent/>
            </Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});