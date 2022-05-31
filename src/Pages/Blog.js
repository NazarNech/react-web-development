import React, { Component } from "react";
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";
class Blog extends Component {
  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <Row>
          <Col md="9">
            <div className="d-flex align-items-center me-5">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                  alt="photo"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5>Blog post</h5>
                <p>Lorem Ipsum</p>
              </div>
            </div>

            <div className="d-flex align-items-center me-5">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                  alt="photo"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5>Blog post</h5>
                <p>Lorem Ipsum</p>
              </div>
            </div>

            <div className="d-flex align-items-center me-5">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                  alt="photo"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5>Blog post</h5>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </Col>

          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>

            <Card>
              <ListGroup as="ul" variant="flush" className="list-group">
                <ListGroup.Item as="li" className="list-group-item" active>
                  category 1
                </ListGroup.Item>
                <ListGroup.Item>category 2</ListGroup.Item>
                <ListGroup.Item>category 3</ListGroup.Item>
                <ListGroup.Item>category 4</ListGroup.Item>
                <ListGroup.Item>category 5</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3 bg-light">
              <Card.Body>
                <Card.Title>Slide Widget</Card.Title>
                <Card.Text>Lorem Ipsum</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Blog;
