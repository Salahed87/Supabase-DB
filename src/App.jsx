import { Navbar , Container, Nav, Row, Form , Col, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div>
      <Navbar>
        <Container>

        <Navbar.Brand> Store Product</Navbar.Brand>
        <Nav>
          <Nav.Item>Created by Salah Aldin Edouard</Nav.Item>
        </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col xs ={12} md={8}>
          <h3>Create product For Supabase Database</h3>
          <Form.Label> Product Name</Form.Label>
          <Form.Control 
            type="text"
            id="name"
            ></Form.Control>
          <Form.Label> Product Description</Form.Label>
          <Form.Control 
            type="text"
            id="decription"
            ></Form.Control>
            <br />
            <Button>Create Product in supabase DB</Button>
            </Col>

          
        </Row>
      </Container>

    </div>
  )
}
