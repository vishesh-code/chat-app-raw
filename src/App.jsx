import {useDispatch ,useSelector} from 'react-redux';
import {addtodo,removetodo,deletetodo} from "./actions/index"
import { useState } from "react";


function App() {
  const [input,setInput]=useState("");
  const dispatch=useDispatch();
  const list =useSelector((state)=>state.Todoreducer.list)
  

  return (
    <>
    <div className="todo-app">
      <header>
        <h1>
        <u>Todo App</u>
        </h1>
      </header>

    <div className="todo-form">
          <input type="text" value={input} className="todo-input" placeholder="Add a todo" onChange={(e)=>setInput(e.target.value)}  />
            <button  className="todo-button" onClick={()=>dispatch(addtodo(input),setInput(""))} >
              Add Todo
            </button>
            </div>

<>
     <ul>
     {list.map(elem => (
<li key={elem.id}  className= "todo-row" >
<h1>{elem.data}</h1>
<i className="fa-solid fa-trash" onClick={()=>dispatch(removetodo(elem.id))}></i>
 </li>
))}
    </ul>
<button className="button2" onClick={()=>dispatch(deletetodo())}>DELET ALL</button>
</>

    </div>
    </>
  )
}

export default App
