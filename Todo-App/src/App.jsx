// import { useState } from "react"


// function App(){
//   const [num, setNum] = useState(0);
//   const addNum = ()=>{
//     setNum(num + 1);
//     console.log(num)
//   }

// const lessNum = ()=>{
// setNum(num - 1);
// console.log(num)
// }
//   return(
//     <>
//         <h1>Hello World</h1><br />
//         <h1>Add {num}</h1><br />
//         <button onClick={addNum}>Add {num}</button>
//         <button onClick={lessNum}>Less {num}</button>
//     </>
//   )
// }

// export default App




import { useState , useRef } from "react"

const App = () => {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    console.log(todo);

    todoVal.current.value = ""  
    
  }
  

  
  const deleteTodo = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);
    
  }


  const editTodo = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("Enter Value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
    
  }

  
  return(
    <>
    <h1 className="text-center">Todo App</h1>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Enter Text" ref={todoVal} />
      <button type="submit">click</button>
    </form>

    <ul>
      {todo.map((item , index)=>{
        return <li key={index}>{item}
        <button onClick={()=> deleteTodo(index)}>Delete</button>
        <button onClick={()=> editTodo(index)}>Edit</button>
        </li>
      })}
    </ul>

   
    </>
  )
}
export default App; 