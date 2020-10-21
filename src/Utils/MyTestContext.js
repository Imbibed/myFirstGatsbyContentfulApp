import React from 'react'

const MyTestContext = React.createContext(contextValue);

const rabbits = {
  jeanno: { name: 'jeanno', age: 5},
  roger: { name: 'roger', age: 2}
}

const contextValue = {
  rabbits: rabbits,
  incrementAge: (index) => {
    if(rabbits[index]){
      rabbits[index].age = rabbits[index].age + 1;
    }else{
      console.log("No rabbit for this index");
    }
  },
  decrementAge: (index) => {
    if(rabbits[index]){
      rabbits[index].age = rabbits[index].age - 1;
    }else{
      console.log("No rabbit for this index");
    }
  }
}

export default MyTestContext;