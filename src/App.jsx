import { Navbar , Container, Nav, Row, Form , Col, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import ProductCard from "./ProductCard";
export default function App() {

  // useStates
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')

  // useEffect

  //func
  const handleSubmit = (e) => {
    e.pervent.Defalut()

  }
  console.log(name,description)
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
            onChange={(e)=> setName(e.target.value)}
            ></Form.Control>
          <Form.Label> Product Description</Form.Label>
          <Form.Control 
            type="text"
            id="description"
            onChange={(e)=> setDescription(e.target.value)}
            ></Form.Control>
            <br />
            <Button>Create Product in supabase DB</Button>
            </Col>

          
        </Row>
        <hr />
        <h3>Current Database items</h3>
        <Row xs={1} lg={4} className="g-4">
          <Col>
         <ProductCard/>
          </Col>
     

        </Row>
      </Container>

    </div>
  )
}
