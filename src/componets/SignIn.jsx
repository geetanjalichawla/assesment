import React ,{useState} from 'react';

const Signup = () => {
    const [password, passwordUpdate] = useState("");
    const [alertText, setAlertText] = useState("");
    const [Email, setEmail] = useState("");

  const handleEmail = (event) =>{
    setEmail(event.target.value);
    // setAlertText("entering the email haaaannnnn");
  }
  const handlePassword = (event)=>{
    passwordUpdate(event.target.value);
    if(password.length >= 8)
    setAlertText("");
    else
    setAlertText("password length should be minimum 8 "); 
  }
  const handleClick = (event)=>{
    event.preventDefault();
    if(password.length >= 8)
    {
        setEmail("");
        setAlertText("submitted");
        passwordUpdate("");
    }
    else 
    {
        setAlertText("please enter 8 charaters for password");
    }
  }
    return (
        <div className='container'>
 <div class="card width-30rem m-auto my-5 ">
  <div class="card-header">
    SignUp
  </div>
  <div class="card-body m-auto">
    <form action="">
        <label  className ="block my-3 "htmlFor="email" >email:</label>
        <input className ="block my-3 " type="text" name ="email"  value ={Email} onChange={handleEmail} />
        <label  className ="block my-3 "htmlFor="password">password</label>
        <input  className ="block my-3 "type="password"  name="password" value={password} onChange ={handlePassword}/>
        <span style={{color:"red"}}>{alertText}</span>
    </form>
    <a href="/" class="btn btn-primary my-3" onClick={handleClick}>SUBMIT</a>
  </div>
</div>
        </div>
    );
}

export default Signup;
