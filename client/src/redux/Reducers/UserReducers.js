import { GET_USERS } from "../Types/UserType"

const initialState = {
    users:[]
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
case GET_USERS:
    return{...state,users:payload.users}
default:
    return state
  }
}

export default userReducer