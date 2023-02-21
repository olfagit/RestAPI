import axios from "axios"
import { GET_USERS } from "../Types/UserType"

export const get_users = (data) => async(dispatch)=>{
    try {
       const res = await axios.get("/user/all" , data) 
     dispatch({type:GET_USERS , payload:res.data})
    } catch (error) {
       console.log(error) 
    }
}

export const add_user = (user) => async(dispatch)=>{
   try {
      await axios.post("/user/add" , user)
      dispatch(get_users())
   } catch (error) {
      console.log(error)
   }
}

export const delete_user = (id) => async(dispatch)=>{
   try {
      await axios.delete(`/user/del/${id}`)
      dispatch(get_users())
   } catch (error) {
      console.log(error)
   }
}

export const edit_user = (id,data) => async(dispatch)=>{
   try {
      await axios.put(`/user/edit/${id}` , data)
      dispatch(get_users())
   } catch (error) {
      console.log(error)
   }
}