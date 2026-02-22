import {useNavigate} from "react-router-dom"

function Navbar(){

const navigate = useNavigate()

const logout=()=>{
 localStorage.removeItem("token")
 navigate("/login")
}

return(

<div className="flex flex-col fixed h-full bg-gray-800 text-white text-center w-40 p-4">

<h1 className="font-bold">Task Dashboard</h1>

<div className="flex flex-col space-y-4 m-4 hover:text-underline">

<button className="hover:text-blue-400 transition-colors" onClick={()=>navigate("/")}>
Dashboard
</button>

<button className="hover:text-blue-400 transition-colors" onClick={()=>navigate("/profile")}>
Profile
</button>

<button className="hover:text-red-400 transition-colors" onClick={logout}>
Logout
</button>
</div>





</div>

)

}

export default Navbar