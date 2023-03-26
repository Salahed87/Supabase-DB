import {useState} from 'react'
import { Button, Card , Form} from 'react-bootstrap'

export default function ProductCard(props) {
    //states
    const [editing, setEditing] = useState(false)
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')

    //varibles
    const product = props.product

    //funcs
    return (
   <Card style={{width:"18rem"}}>
    <Card.Body>
        {editing == false ?
        <>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant='danger'>Delete Product</Button>
        <Button variant='secondary' onClick={()=> setEditing(true)}>Edit Product</Button>
        </>
        :
        <>
        <h4>Editing</h4>
        <Button size='xs' onClick={()=> setEditing(false)}> Go back</Button>
        <br />
        <Form.Label> Product Name</Form.Label>
          <Form.Control 
            type="text"
            value={product.name}
            id="name"
            onChange={(e)=> setName(e.target.value)}
            ></Form.Control>
          <Form.Label> Product Description</Form.Label>
          <Form.Control 
            type="text"
            value={product.description}
            id="description"
            onChange={(e)=> setDescription(e.target.value)}
            ></Form.Control>
            <br />
            <Button>Create Product in supabase DB</Button>
        </>
    }
    </Card.Body>
   </Card>
  )
}
