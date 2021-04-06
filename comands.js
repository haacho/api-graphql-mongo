/* 

Para solicitar cosas:

{
    users {
      _id
      firstname
      lastname
      age
    }
  }
  

  Para pedir:
  
  mutation {
    createUser(input: {firstname: "Hacho", lastname: "Pitt", age: 30}){
       _id
      firstname
      lastname
      age
    }
  }
   */
