function TaskCard({task}){

return(

<div className="border p-4 rounded shadow">

<h2 className="font-bold">{task.title}</h2>

<p>{task.description}</p>

<p className="text-sm text-gray-500">
Status: {task.description.includes("complete") ? "Complete":"Incomplete"}
</p>

</div>

)

}

export default TaskCard