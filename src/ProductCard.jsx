import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function ProductCard() {
  return (
   <Card style={{width:"18rem"}}>
    <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>Product Description</Card.Text>
        <Button variant='danger'>Delete Product</Button>
        <Button variant='secondary'>Edit Product</Button>
    </Card.Body>
   </Card>
  )
}
