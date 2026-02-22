import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import API from "../servies/api"

function Signup(){

const navigate=useNavigate()

const [form,setForm]=useState({
 name:"",
 email:"",
 password:""
})

const handleChange=(e)=>{
 setForm({...form,[e.target.name]:e.target.value})
}

const submit=async(e)=>{

 e.preventDefault()

 if(form.password.length<6){
  alert("Password must be 6 characters")
  return
 }

 await API.post("/auth/signup",form)

 navigate("/login")

}

return(

<div className="bg-sky-200 flex justify-center items-center h-screen">

<form onSubmit={submit} className=" p-6 shadow-2xl bg-blue-200 rounded-sm w-96">

<h2 className="text-xl text-center mb-4">Signup</h2>

<input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full mb-3 rounded-lg"/>

<input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full mb-3 rounded-lg"/>

<input type="password" name="password" placeholder="Password 6 character" onChange={handleChange} className="border p-2 w-full mb-3 rounded-lg"/>

<button className="bg-blue-500 active:bg-indigo-500 text-white rounded-sm w-full p-2">
Signup
</button>
</form>

</div>

)

}

export default Signup