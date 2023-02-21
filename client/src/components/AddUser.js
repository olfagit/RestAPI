import React , {useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {add_user} from '../redux/Actions/UserAction'

function AddUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit =() => {
    dispatch(add_user({name,email,password}),navigate("/"))
  }

  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="String" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      
    </Form>
    </div>
  )
}

export default AddUser