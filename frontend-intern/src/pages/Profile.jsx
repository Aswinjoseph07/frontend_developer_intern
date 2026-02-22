import {useEffect,useState} from "react"
import API from "../servies/api"
import Navbar from "../components/Navbar"

function Profile(){

const [user,setUser]=useState({})

useEffect(()=>{

API.get("/user/profile")
.then(res=>setUser(res.data))

},[])

return(

<div>

<Navbar/>

<div className="flex flex-col p-10 items-center">

<h1 className="text-2xl font-bold mb-4">
User Profile
</h1>

<img className="w-46 h-46" src="https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg" alt="profile pic"/>

<p><b>Name:</b> {user.name}</p>
<p><b>Email:</b> {user.email}</p>

</div>

</div>

)

}

export default Profile