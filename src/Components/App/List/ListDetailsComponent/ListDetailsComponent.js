import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListDetailsStyles from "./ListDetailsStyled";

const ListDetailsComponent = () => {
    return (
        <ListDetailsStyles>
            <Container>
                <Row>
                    <Col className='item-slider h-auto' xs={12} sm={12} md={4}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-inline w-100 img-fluid"
                                    src="https://picsum.photos/600"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-inline w-100 img-fluid"
                                    src="https://picsum.photos/600"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-inline w-100 img-fluid"
                                    src="https://picsum.photos/600"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-inline w-100 img-fluid"
                                    src="https://picsum.photos/600"
                                    alt="Fourth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-inline w-100 img-fluid"
                                    src="https://picsum.photos/600"
                                    alt="Fifth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='item-description' xs={12} sm={12} md={8}>
                        <h1 className='description-title'>Title</h1>
                        <h2 className='description-seller'>Seller name <span><em>seller phone</em></span></h2>
                        <h3 className='description-about'>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus enim
                                eveniet magnam obcaecati odio omnis possimus suscipit. Aliquam, ducimus esse facere id
                                inventore nihil nostrum possimus rem rerum voluptate!
                            </div>
                        </h3>
                        <Link to="/" className="description-link d-block ml-auto bg-primary">Back</Link>
                    </Col>
                </Row>
            </Container>
        </ListDetailsStyles>
    )
}

export default ListDetailsComponent;
