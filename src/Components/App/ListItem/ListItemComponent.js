import React from "react";
import {Button, Container, Row} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
	.item-block {
		padding: 15px;
	
		.item-description {
			padding-left: 15px;
			display: inline-block;
			vertical-align: middle;
		}
}
`;

const ListItemComponent = ({data}) => {
	const dataItem = data.map((item) => (
		<Styles key={item.id}>
			<Container fluid className="item-block">
				<img src={item.preview} alt=""/>
				<div className="item-description">
					<p>{item.name}</p>
					<p>Цена: {item.price}<span> {item.currency}</span></p>
					<Button>Show more</Button>
				</div>
			</Container>
		</Styles>
	))
	return (
		<Row>{dataItem}</Row>
	)
};

export default ListItemComponent;