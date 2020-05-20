import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ListItemStyles from './ListItemStyled';

const ListItemComponent = ({data, onTodoClick}) =>
    <ListItemStyles className="pt-3">
        <Container>
            <Row>
                {data.map((item) => (
                    <Col xs={12} sm={6} md={4} className="item-block" key={item.id}>
                        <img src={item.preview} alt=""/>
                        <div className="item-description">
                            <p>{item.name}</p>
                            <p>Цена: {item.price}<span> {item.currency}</span></p>
                            <Link to={`/details/${item.id}`}
                                  className="bg-primary"
                                  key={item.id}
                            >Show more</Link>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </ListItemStyles>

const mapStateToProps = state => {
    return {
        data: state.listState.data
    };
};

export default connect(mapStateToProps, null)(ListItemComponent);
