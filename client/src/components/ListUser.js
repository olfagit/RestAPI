import React , {useEffect} from 'react'
import {useDispatch , useSelector} from "react-redux"
import { get_users } from '../redux/Actions/UserAction'
import UserCard from './UserCard'

function ListUser() {
  
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch (get_users())
  }, [])

  const users = useSelector((state)=>state.userReducer.users)

  return (
    <div>
      {users.map((el)=> <UserCard  el={el}/> )}
    </div>
  )
}

export default ListUser