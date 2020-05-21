import React from 'react';
import ListItemComponent from './ListItemComponent';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../../Redux/store';

it('Create snapshot', () => {
    const tree = renderer
        .create(<ListItemComponent />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});