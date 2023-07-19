import {useState} from "react";
import axios from "axios";
import './App.css';

function App() {

   const [name, setName]=useState("");
   const [password, setpassword] = useState("");

   const [loginName, setloginName]=useState("");
   const [loginPassword, setloginPassword] = useState("");
   
    const [display, setdisplay] = useState([]);

    const [loginStatus, setloginStatus] = useState("");
const Register=()=>{
            setdisplay(`name:${name} and password:${password}`)
             axios.post("http://localhost:3001/register",
              {name:name, password:password,}
              ).then(()=>{
                console.log("posted from frintend")

            })
            
  
}

const Login=()=>{
  
   axios.post("http://localhost:3001/login",
    {name:loginName, password:loginPassword,}
    ).then((response)=>{
      console.log(response)
      if(response.data.message){
        setloginStatus(response.data.message)
      }else{
        setloginStatus(response.data[0].name)
      }
      

  })
   
}


  return (
    <div className="App">
      <input className="input"  type="text" placeholder="name.." onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="user" className="name"  >User Name</label>
       <br />
      <input className="input"   type="password" placeholder="password.." onChange={(e)=>setpassword(e.target.value)}/>
      <label htmlFor="user" className="name" >Password</label>
    <br />
    <br />
      <button type="button" className="registerbutton" onClick={Register}>Register</button>
      <br />
    <br />
    <br />
      <div className="login-con">
         <input className="input"  type="text" placeholder="name.." onChange={(e)=>setloginName(e.target.value)}/>
      <label htmlFor="user" className="name" >User Name</label>
       <br />
      <input className="input"   type="password" placeholder="password.." onChange={(e)=>setloginPassword(e.target.value)}/>
      <label htmlFor="user"  className="name"  >Password</label>
     <br />

      <button type="button" className="registerbutton" onClick={Login}>Login</button>
      </div>

      <br />
     <h1 className="name"> {loginStatus}</h1> 
    </div>
  );
}

export default App;
