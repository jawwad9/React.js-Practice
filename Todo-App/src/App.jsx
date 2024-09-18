import { useState , useRef } from "react"

const App = () => {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    
  if(todoVal.current.value===""){
    alert("Enter a value")      
  }
  else{
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    todoVal.current.value = ""  
  }
  }

  const deleteTodo = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);  
  console.log(todo);
}


  const editTodo = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("Enter Value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
    
  }

  
  return(
    <>
    <div className=" d-flex flex-column align-items-center p-4 min-vh-100 bg-light">
      <div className="">
      <h1 className="text-center mt-3">Todo App</h1>
    <form onSubmit={addTodo} className="d-flex w-100 mb-4 mt-4 p-3 "
          style={{ maxWidth: '500px' }}>
      <input className="form-control me-2" type="text" placeholder="Enter Text" ref={todoVal} />
      <button className="btn btn-outline-primary " type="submit" >Submit</button>
    </form>
      </div>

   <div className=" bg-light text-center p-5 gap-3 list-group w-100 " style={{ maxWidth: '500px' }}>
      {todo.map((item , index)=>{
        return <div className="d-flex justify-content-around align-items-center mb-2 p-2 rounded shadow-sm bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-cyan-500/50 rounded" 
        key={index}>{item}
        <div className="btn-group d-flex align-items-center justy-content-center flex-wrap">
        <button className="btn btn-outline-primary btn-sm" onClick={()=> editTodo(index)}>Edit</button>
        <button className="btn btn-outline-danger btn-sm " onClick={()=> deleteTodo(index)}>Delete</button>
        </div>
        </div>
      })}
   </div>
    </div>
   
    </>
  )
}
export default App; 