import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ListDetailsStyles from './ListDetailsStyled';

const ListDetailsComponent = ({data, match}) => {
    const itemId = match.params.id
    return (
        <ListDetailsStyles className="pt-3">
            <Container>
                {data.map((item) => {
                    if (item.id === itemId) {
                        return (
                            <Row key={item.id}>
                                <Col className='item-slider' xs={12} sm={12} md={4}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-inline w-100 img-fluid"
                                                src={item.photos}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-inline w-100 img-fluid"
                                                src={item.photos}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-inline w-100 img-fluid"
                                                src={item.photos}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-inline w-100 img-fluid"
                                                src={item.photos}
                                                alt="Fourth slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-inline w-100 img-fluid"
                                                src={item.photos}
                                                alt="Fifth slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>
                                <Col className='item-description' xs={12} sm={12} md={8}>
                                    <div>
                                        <h1 className='description-title'>{item.name}</h1>
                                        <p>{item.price}<span> {item.currency}</span></p>
                                        <p className='description-seller'>{item.seller}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </Col>
                            </Row>
                        )
                    } else {
                        return false
                    }
                })
                }
                <Link to="/"
                      className="description-link d-block ml-auto bg-primary"
                > Back
                </Link>
            </Container>
        </ListDetailsStyles>
    )
}

const mapStateToProps = state => {
    return {
        data: state.listState.data,
    };
};

export default connect(mapStateToProps, null)(ListDetailsComponent);
