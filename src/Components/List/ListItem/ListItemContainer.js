import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../../../Redux/re-ducks';
import ListItemComponent from './ListItemComponent';

const ListItemContainer = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadData())
    })
    
    return (
        <div>
            <ListItemComponent/>
        </div>
    )
}

export default ListItemContainer;
