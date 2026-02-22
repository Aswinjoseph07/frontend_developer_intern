import {useEffect,useState} from "react"
import API from "../servies/api"
import Navbar from "../components/Navbar"
import TaskCard from "../components/TaskCard"

function Dashboard(){

const [tasks,setTasks]=useState([])
const [search,setSearch]=useState("")
const [filter,setFilter]=useState("all")

useEffect(()=>{
 API.get("/tasks").then(res=>setTasks(res.data))
},[])

const filteredTasks = tasks
.filter(task=>task.title.toLowerCase().includes(search.toLowerCase()))
.filter(task=>{
 if(filter==="complete") return task.description.includes("complete")
 if(filter==="incomplete") return !task.description.includes("complete")
 return true
})

return(

<div>

<Navbar/>

<div className="flex flex-col gap-3 justify-center p-6 ml-75 max-w-xl">

<input
placeholder="Search tasks"
onChange={(e)=>setSearch(e.target.value)}
className="border p-1 m-4"
/>

<select
onChange={(e)=>setFilter(e.target.value)}
className="border p-1 m-4"
>

<option value="all">All</option>
<option value="complete">Complete</option>
<option value="incomplete">Incomplete</option>

</select>

<div className="grid grid-cols-3 gap-4 mt-4">

{filteredTasks.map(task=>(
<TaskCard key={task.id} task={task}/>
))}

</div>

</div>

</div>

)

}

export default Dashboard