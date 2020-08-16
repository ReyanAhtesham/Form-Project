import React,{Component, useEffect, useState} from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import 'materialize-css';
import { motion } from "framer-motion"
import M from "materialize-css";


function Interview() {

const {register, handleSubmit ,errors} = useForm();
const [ size, setSize] = useState(1);  
const [ visible, setVisible] = useState(false);
const [ heist, setHeist] = useState(90);
const [ sequel, setSequel] = useState(1);
const [result, setResult] = useState({"data":{"status":"No"}})
const [rant, setRant] = useState(null);
const [firstName, setFirstName] = useState("Ali");
const [lastName, setLastName] = useState("Reyan");
const [email, setEmail] = useState("");
const [password, setpassword] = useState("asdklfijsfafs");
const [end, setEnd] = useState(false);
const [cord, setCord] = useState(false);



useEffect(() => {

    var data = JSON.stringify({
        "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        "data": {
            "email": email
        }});


    
            var xhr = new XMLHttpRequest();
              
            xhr.addEventListener("readystatechange", function () {
              if (this.readyState === this.DONE) {
                setResult(this.responseText);    
            }
            });
            
            xhr.open("POST", "https://api.raisely.com/v3/check-user");
            xhr.setRequestHeader("content-type", "application/json");
            
            xhr.send(data);  
            
    
   var datas = JSON.stringify({
                            "data": {
                                "firstName": firstName,
                                "lastName": lastName,
                                "email": email,
                                "password": password
                              },
                              "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a"
                            });
                            var xhr = new XMLHttpRequest();
                          
                            xhr.addEventListener("readystatechange", function () {
                              if (this.readyState === this.DONE) {
                                setRant(this.responseText);
                                }
                            });
                            
                            xhr.open("POST", " https://api.raisely.com/v3/signup");
                            xhr.setRequestHeader("content-type", "application/json");
                            
                            xhr.send(datas);         
                
            } ,[firstName,email,password,lastName]);




const onSubmit = (data) => {
    console.log(data)
    setVisible(true)
    setSequel(0)
    console.log(result)
    console.log(rant)

    const innn = result[19] + result[20]
               
    if( innn=== "OK"){
setEnd(false)
setVisible(true)
            
        } else{ 
            setEnd(true)
            setVisible(false)
        }
         
}
  
  const getFirst = () => {
      setHeist(90)
  }

  const getSecond = (data) => {
     setHeist(190)
    }

    const getThird = () => {
        setHeist(290)
    }
    
  const getForth = () => {
    setHeist(390)
}




  return (
    <div className="outer-div">
        
<div className="container">

  <input style={{marginTop:"50px",border:"puple"}} 
  className="white-text left-align btn btn-large purple darken-4"
   type="range"
   min="50" max="130" 
    onChange={(e) => { if (e.target.value<100) {
        setSize(0+ "." + e.target.value.substring(0,1))
      } else {
        setSize(1+ "." + e.target.value.substring(1,2))
 }     }
}/>
<div className="white-text row">
<h4 className="col s6">Dont Like the Size. Change It </h4><i className="medium material-icons ">arrow_upward</i>
</div>
    <motion.div 
     initial={{
        opacity:1,
        x:0,
        y:0,
        scale:size
    }}
    animate={{
        opacity:1,
        x:0,
        y:0,
        scale:size
        }}
    transition={{
        duration:2,
         loop: Infinity 
    }}
   style={{border:"5px",borderColor:"red"}} className="row">


   <motion.div className="center-align"  initial={{
        opacity:sequel,
        x:700,
        y:heist,
    }}
    animate={{
        opacity:sequel,
        x:540,
        y:heist,
        }}
    transition={{
        duration:3,
        loop:Infinity,
        type: 'spring', damping: 2
    }}
    style={{backgroundColor:"red",marginLeft:"30vw", borderRadius:"30px", width:"35px", height:"35px"}}>

   </motion.div>
    
    <form className="center-align white-text" onSubmit={handleSubmit(onSubmit)}>
  <input style={{marginTop:"50px"}} 
  className="white-text left purple darken-4" type="text"
   placeholder="First Name" name="FirstName" 
    ref={register({ required:"First Name REQUIRED"})}
    onSelect={getFirst}
    onChange={(e)=> setFirstName(e.target.value)}
  />

  <input style={{marginTop:"50px"}} 
  className="white-text left-align purple darken-4" type="text"
   placeholder="Last Name" name="LastName"
    ref={register({ required:"Last Name REQUIRED"})}
    onSelect={getSecond}
    onChange={(e)=> setLastName(e.target.value)}
 />
  

  <input style={{marginTop:"50px"}} className="white-text left-align purple darken-4"
   type="email" placeholder="Email" name="Email" 
   ref={register({ required:"Email REQUIRED"})}
   onSelect={getThird}
   onChange={(e)=> setEmail(e.target.value)}
   />

  <input style={{marginTop:"50px"}} 
  className="white-text left-align purple darken-4" type="password"
  name="password" placeholder="password" 
  ref={register({ required:"PASSWORD REQUIRED", minLength:8 })}
  onSelect={getForth}
  onChange={(e)=> setpassword(e.target.value)}
  />
  
  {errors.FirstName &&
    <div>
        <h1>{errors.FirstName.message}</h1> 
    </div>
   }
   {errors.LastName &&
    <div>
        <h1>{errors.LastName.message}</h1> 
     </div>
   }
   {errors.Email &&
    <div>
        <h1>{errors.Email.message}</h1> 
    </div>
   }
   {errors.password &&
     <div>
         <h1>{errors.password.message}</h1> 
         {cord? 
    <div><iframe src="https://giphy.com/embed/3oz8xLd9DJq2l2VFtu" width="480" height="287" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
</div> 
 :
 null
}

     </div>
    }

{end? 
    <div><h1>YOU HAVE SOME PROBLEMS</h1>
    <p>Email Not Valid</p>
    <iframe src="https://giphy.com/embed/3oz8xLd9DJq2l2VFtu" width="480" height="287" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

</div> 
 :
 null
}
   { visible ? <div>
       <h1>VERY WELLDONE</h1>
       <p>Valid Email</p>
       <iframe src="https://giphy.com/embed/l2YWykMPCmCb9lLWM" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
</div>  : null }

  <input style={{marginTop:"50px"}} onClick={()=> <h1> brioii</h1>} className="white-text left-align purple darken-4 btn btn-large" type="submit"/>
 


</form>
</motion.div>
</div>
</div>
  )

}
    
export default Interview;



{/*
const oorl = "https://api.raisely.com/v3/check-user" 
const mail = "test@test.com"
const otherParam={
    "data": {
        "firstName": "boi",
        "lastName": "reyan",
        "email": "reyanahtesham@gmail.com",
        "password": "gilanisahab"
    },
    "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a"
}

    const parmos={"campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a","data": {"email":"test@test.com"}} 


    useEffect(() => {
        getCord()
     } ,[]);


     fetch(
        " https://api.raisely.com/v3/check-user",parmos
      )
      .then(results=>results.json())
      .then(console.log)
  
  
      fetch(
        "https://api.raisely.com/v3/signup",otherParam)
      .then(results=>results.json())
      .then(console.log)
  
      
  const getCord = async () => {
    const response = await fetch("https://api.raisely.com/v3/signup",otherParam);  
    const data= await response.json();
    console.log(data)
  }
  
   */}
