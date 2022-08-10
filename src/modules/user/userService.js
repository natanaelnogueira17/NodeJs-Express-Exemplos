let users = []



const getUserbyEmail = (searchEmail)  => users.find((obj)=> obj.email === searchEmail)

export const signup = (data) =>{
  if(getUserbyEmail(data.email)){
    console.log("existe esse email")
  }else{
    users.push(data)
  }
  
  return true 

}



