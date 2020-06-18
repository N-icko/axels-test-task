import React from 'react';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import ListDetailsComponent from './ListDetailsComponent';

describe('ListDetailsComponent tests', () => {
  const mockStore = configureStore();
  const initialState = {};
  const store = mockStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <ListDetailsComponent/>
    </Provider>);
  
  it('Create ListDetailsComponent snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  it('Renders without any data', () => {
    expect(wrapper.text(''));
  });
});
