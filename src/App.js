import './App.css';
import React, {useState,useEffect} from 'react'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Article from './components/Article'

function App() {

  const userAdmin = {
    email:"user@user.com",
    password: "useradmin"
  }

const [user, setUser]= useState({name: "",email: ""})
const [error, setError]=useState("")

const Login = details => {
  console.log(details)
  if(details.email==userAdmin.email&&details.password==userAdmin.password){
  setUser({
    name:details.name,
    email:details.email
  })
  } else {
  alert("Details Doesnot Match")}
}

const Logout =details=>{
  setUser({name:"",email:""})
}

  return (
    <div className="App">
      {
      (user.email != "") ? (
      <div classname="header">
        <Header Logout={Logout}/>
        <Article/>
      </div>):
      (<LoginForm Login={Login} error={error} />)
      }
    </div>
  );
}

export default App;
