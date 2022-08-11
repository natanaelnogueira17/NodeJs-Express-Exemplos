let users = []



const getUserbyEmail = (searchEmail)  => users.find((obj)=> obj.email === searchEmail)

export const signup = (data) =>{
  if(getUserbyEmail(data.email))  throw new error('email_existente')
    users.push(data)
   return true 

}



