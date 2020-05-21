import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import ListItemComponent  from './ListItemComponent';

describe('ListItemComponent', () => {
    it('Create snapshot', () => {
        const mockStore = configureStore();
        const initialState = {};
        const store = mockStore(initialState);
        const wrapper = shallow(
            <Provider store={store}>
                <ListItemComponent/>
            </Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});