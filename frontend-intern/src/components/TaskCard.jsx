function TaskCard({ task, onToggle, onDelete }) {

return (

<div className="bg-white border rounded-xl p-4 shadow-sm flex justify-between items-center">

<div>

<h2 className={`font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
{task.title}
</h2>

<p className="text-sm text-gray-500">
Status: {task.completed ? "Completed" : "Pending"}
</p>

</div>

<div className="flex flex-col gap-2">

<button
onClick={() => onToggle(task)}
className="bg-green-500 text-white px-3 py-1 rounded"
>
{task.completed ? "Undo" : "Complete"}
</button>

<button
onClick={() => onDelete(task.id)}
className="bg-red-500 text-white px-3 py-1 rounded"
>
Delete
</button>

</div>

</div>

)

}

export default TaskCard