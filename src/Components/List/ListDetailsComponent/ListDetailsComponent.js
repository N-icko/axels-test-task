import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ListDetailsStyles from './ListDetailsStyled';

const ListDetailsComponent = ({ match }) => {
  const data = useSelector(state => state.listState.data);
  const itemId = match.params.id
  return (
    <ListDetailsStyles className="pt-3">
      <Container>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            {item.id === itemId && (
              <Row>
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
            )}
          </React.Fragment>
        ))}
        <Link to="/"
              className="description-link d-block ml-auto bg-primary"
        >Back
        </Link>
      </Container>
    </ListDetailsStyles>
  )
}

export default ListDetailsComponent;
