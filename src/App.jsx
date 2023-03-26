import { Navbar , Container, Nav, Row, Form , Col, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "../supabase";
export default function App() {

  // useStates
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [products, setProducts] = useState([])

  // useEffect
  useEffect(()=> {
    const getProducts = async () => {
      const {data,error} = await supabase
      .from('products')
      .select()
      if(error) {
        alert(error)
      } else
      setProducts(data);

    }
    getProducts()
  },[])

  // funs 
  const addProduct = async () => {
    const {data , error}= await supabase
    .from('products')
    .insert({
      name:name,
      description:description
    })
    console.log(data)
    window.location.reload()
    if(error) {
      alert(error)
    }
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
            <Button onClick={()=> addProduct()}>Create Product in supabase DB</Button>
            </Col>

          
        </Row>
        <hr />
        <h3>Current Database items</h3>
        <Row xs={1} lg={4} className="g-4">
          {products.map(product => (
          <Col>
            <ProductCard product={product}/>
          </Col>
          ))}
     

        </Row>
      </Container>

    </div>
  )
}
