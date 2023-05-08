import {useState} from 'react'

const App = () => {

  const [inputValue,setInputvalue]=useState("")
  const [todos,setTodos]=useState([])

  const addItem=()=>{
    if (inputValue!=="") {
      
    
    setTodos([...todos,inputValue])
    setInputvalue("")

    }
    else{
      alert("not accept empty values")
    }
  }

  const deleteTodos=(index)=>{
    const todoses=[...todos];

    todoses.splice(index,1);
    setTodos(todoses)
  }


  return (
    <div className='container py-4 alin-items-center bg-primary mx-auto my-4 d-flex justify-content-center flex-column'>
  


  <div>
   <h1 className='warning '>Todolist</h1>
   </div>
    


    <div>
      <input type="text" value={inputValue.toLocaleUpperCase()} onChange={(e)=>setInputvalue(e.target.value)} className='px-2 outline-0 form-control w-25'   placeholder='Enter something to add... ' />

      <button className='btn btn-success my-2' onClick={addItem}>Add items</button>
    </div>

      <div className='p-3 my-2 '>

          <div>

            {
              todos.map((todo,index)=>(
                <ul key={index}>
                <li  className='p-2 w-50 bg-white text-success align-items-center d-flex justify-content-between my-2 text-lg '>{todo}<button className='btn btn-danger my-2 mx-2' onClick={()=> deleteTodos(index)}>delete items</button></li>

     
                
               </ul>
              ))
            }
          </div>


      </div>


      
    </div>
  )
}

export default App
