import React, { Component } from "react";
import ListItemComponent from "./ListItemComponent";

class ListItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyList: [],
        };
    }
    
    componentDidMount() {
        fetch('http://demo2846384.mockable.io/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    propertyList: data
                })
            })
    }
    
    render() {
        return (
            <ListItemComponent data={this.state.propertyList}/>
        )
    }
}

export default ListItemContainer;