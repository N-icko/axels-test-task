import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../../../Redux/re-ducks';
import ListItemComponent from './ListItemComponent';

const ListItemContainer = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadData())
    })
    
    return <ListItemComponent/>
}

export default ListItemContainer;
