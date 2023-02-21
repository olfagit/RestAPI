import React , {useState} from 'react'
import {Button,Card,Modal,Form} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import { delete_user, edit_user } from '../redux/Actions/UserAction'

function UserCard({el}) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [name,setName] = useState(el.name)
  const [email,setEmail] = useState(el.email)
  const dispatch = useDispatch()

  const handleDelet = () =>{
    dispatch(delete_user(el._id))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(edit_user( el._id ,{name,email} ,handleClose()))
  }

  return (
    <div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.email}</Card.Text>
        <Button variant="danger" onClick = {handleDelet}>Delete</Button>
        
        <>
      <Button variant="primary" onClick={handleShow}>
      Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="String" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

      </Card.Body>
</Card>
    </div>
  )
}

export default UserCard