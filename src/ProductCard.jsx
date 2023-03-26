import {useState} from 'react'
import { Button, Card , Form} from 'react-bootstrap'
import { supabase } from '../supabase'

export default function ProductCard(props) {
    //varibles
    const product = props.product

    //states
    const [editing, setEditing] = useState(false)
    const [name,setName] = useState(product.name)
    const [description,setDescription] = useState(product.value)


    //funcs
    const updateProduct = async () => {
        const {data , error} = await supabase
        .from('products')
        .update({
            name:name,
            description:description
        })
        .eq('id', product.id)
        if(error){
            alert(error)
        }
        window.location.reload()
    }
    const deleteProduct = async () => {
        const {data , error} = await supabase
        .from('products')
        .delete()
        .eq('id',product.id)
        if(error){
            alert(error)
        }
        window.location.reload()
    }
    return (
   <Card style={{width:"18rem"}}>
    <Card.Body>
        {editing == false ?
        <>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant='danger' onClick={()=> deleteProduct()}>Delete Product</Button>
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
            defaultValue={product.name}
            id="name"
            onChange={(e)=> setName(e.target.value)}
            ></Form.Control>
          <Form.Label> Product Description</Form.Label>
          <Form.Control 
            type="text"
            defaultValue={product.description}
            id="description"
            onChange={(e)=> setDescription(e.target.value)}
            ></Form.Control>
            <br />
            <Button onClick={()=> updateProduct()}> Update supabase DB</Button>
        </>
    }
    </Card.Body>
   </Card>
  )
}
