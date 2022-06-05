import React, { Component } from "react";
import { Card, CardImg, Container, Button, NavLink } from "react-bootstrap";
// import Developers from "./BlogPages/Developers";

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <div className="row">
            <div className="col">
              <Card className="m-4 text-center" bg="light" border="primary">
                <Card.Img
                  variant="top"
                  src="https://potomac.edu/wp-content/uploads/2020/12/benefits-of-coding-e1606911064541.jpg"
                />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>Team 1</Card.Text>
                  <Button variant="info">
                    <NavLink href="./home/developers">About team</NavLink>
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card className="m-4 text-center" bg="light" border="primary">
                <Card.Img
                  variant="top"
                  src="https://static-ssl.businessinsider.com/image/534bf90369bedd4c50730c6d-1200-800/ap110816116476.jp2"
                />
                <Card.Body>
                  <Card.Title>QA Engineers</Card.Title>
                  <Card.Text>Team 2</Card.Text>
                  <Button variant="info">
                    <NavLink href="./home/qa">About team</NavLink>
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card className="m-4 text-center" bg="light" border="primary">
                <Card.Img
                  variant="top"
                  src="https://i0.wp.com/humantouchtranslations.com/wp-content/uploads/2018/08/project-management.jpg?fit=1200%2C800&ssl=1"
                />
                <Card.Body>
                  <Card.Title>Project Managers</Card.Title>
                  <Card.Text>Team 3</Card.Text>
                  <Button variant="info">
                    <NavLink href="./home/pm">About team</NavLink>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
