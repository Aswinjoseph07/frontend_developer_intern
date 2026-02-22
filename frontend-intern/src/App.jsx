import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import ProtectedRoute from "./components/ProtectedRoute"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

<Route element={<ProtectedRoute/>}>
<Route path="/" element={<Dashboard/>}/>
<Route path="/profile" element={<Profile/>}/>
</Route>

</Routes>

</BrowserRouter>

)

}

export default App