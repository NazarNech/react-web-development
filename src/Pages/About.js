import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import { Col, Nav, Row, Container } from "react-bootstrap";

export class About extends Component {
  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <Container>
          <Tab.Container id="left-tabs-example" dafaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-2">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Team</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Program</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Library</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <img
                      className="d-block w-100"
                      src="https://www.jaintechnosoft.com/wp-content/uploads/web-designers-bangalore.jpg"
                      alt="picture one"
                    />
                    <p>Picture 1</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <img
                      className="d-block w-100"
                      src="https://tinypng.com/images/social/website.jpg"
                      alt="picture two"
                    />
                    <p>Picture 2</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <img
                      className="d-block w-100"
                      src="https://www.w3schools.com/css/img_lights.jpg"
                      alt="picture three"
                    />
                    <p>Picture 3</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <img
                      className="d-block w-100"
                      src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"
                      alt="picture four"
                    />
                    <p>Picture 4</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <img
                      className="d-block w-100"
                      src="https://www.oberlo.com/media/1603969791-image-1.jpg"
                      alt="picture five"
                    />
                    <p>Picture 5</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default About;
