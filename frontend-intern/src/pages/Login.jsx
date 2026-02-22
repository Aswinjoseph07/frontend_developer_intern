import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import API from "../servies/api"

function Login(){

const navigate=useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const login=async(e)=>{

 e.preventDefault()

 const res = await API.post("/auth/login",{email,password})

 localStorage.setItem("token",res.data.token)

 navigate("/")

}

return(
    <div className="bg-sky-200 flex justify-center items-center min-h-screen w-full">

<form onSubmit={login} className="bg-blue-200 p-6 shadow-2xl w-96 h-80 rounded-sm">

<h2 className="text-xl mb-4 text-center">Login</h2>

<input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="border p-2 w-full mb-5 rounded-md"/>

<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="border p-2 w-full mb-5 rounded-md"/>

<button className="bg-green-500 active:bg-teal-500 text-white w-full p-2 mt-4 rounded-sm justify-center">
Login
</button>
<p className="text-center mt-4 text-sm">

Don't have an account?{" "}

<Link
to="/signup"
className="text-blue-500 hover:underline"
>
Signup
</Link>

</p>
</form>

</div>
)

}

export default Login