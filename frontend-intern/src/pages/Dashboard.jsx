import { useEffect, useState } from "react"
import API from "../servies/api"
import Navbar from "../components/Navbar"
import TaskCard from "../components/TaskCard"

function Dashboard(){

const [tasks,setTasks] = useState([])
const [filter,setFilter] = useState("all")
const [taskText,setTaskText] = useState("")

useEffect(()=>{
 fetchTasks()
},[])

const fetchTasks = async ()=>{
 try{
  const res = await API.get("/tasks")
  setTasks(res.data)
 }catch(err){
  console.log(err)
 }
}

const addTask = async ()=>{
 if(!taskText.trim()) return

 try{
  await API.post("/tasks",{ title: taskText })
  setTaskText("")
  fetchTasks()
 }catch(err){
  console.log(err)
 }
}

const toggleTask = async (task)=>{
 try{
  await API.put(`/tasks/${task.id}`,{
   completed: !task.completed
  })
  fetchTasks()
 }catch(err){
  console.log(err)
 }
}

const deleteTask = async (id)=>{
 try{
  await API.delete(`/tasks/${id}`)
  fetchTasks()
 }catch(err){
  console.log(err)
 }
}

const filteredTasks = tasks

.filter(task=>{
 if(filter==="complete") return task.completed
 if(filter==="incomplete") return !task.completed
 return true
})

return(

<div>

<Navbar/>

<div className="flex flex-col gap-3 justify-center p-6 max-w-xl mx-auto">

{/* Add Task */}

<div className="flex gap-2">

<input
placeholder="Add new task"
value={taskText}
onChange={(e)=>setTaskText(e.target.value)}
className="border p-2 flex-1 rounded"
/>

<button
onClick={addTask}
className="bg-blue-500 text-white px-4 py-2 rounded"
>
Add
</button>

</div>

{/* Search */}



{/* Filter */}

<select
value={filter}
onChange={(e)=>setFilter(e.target.value)}
className="border p-2 rounded"
>

<option value="all">All</option>
<option value="complete">Completed</option>
<option value="incomplete">Incomplete</option>

</select>

{/* Task List */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

{filteredTasks.length === 0 && (
<p className="text-gray-500">No tasks found</p>
)}

{filteredTasks.map(task=>(
<TaskCard
 key={task.id}
 task={task}
 onToggle={toggleTask}
 onDelete={deleteTask}
/>
))}

</div>

</div>

</div>

)

}

export default Dashboard