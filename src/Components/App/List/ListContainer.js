import React, {Component} from "react";
import ListComponent from "./ListComponent";

class ListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	
	render() {
		return (
			<ListComponent />
		)
	}
}

export default ListContainer;