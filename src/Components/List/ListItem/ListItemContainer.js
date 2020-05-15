import React, { useEffect, useState } from 'react';
import ListItemComponent from './ListItemComponent';

const ListItemContainer = () => {
    const [propertyData, setPropertyData] = useState([]);
    
    useEffect(() => {
        fetch('http://demo2846384.mockable.io/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPropertyData(data)
            })
    }, []);
    
    return (
        <ListItemComponent data={propertyData}/>
    )
}

export default ListItemContainer;