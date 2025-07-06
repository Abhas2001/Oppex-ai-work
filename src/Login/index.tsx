

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usercontext } from '../App';
import { validateEmail } from '../utils/validateEmail';
import './index.css'
const Login = () => {
   
    const {setisuserLoggedin,logindata} = useContext(usercontext);
    const navigate = useNavigate()
    const[loginemail,setloginemail] = useState('');
    const[loginpass,setloginpass] = useState('');
    const[isuserverified,setisuserverified] = useState(false);
    const[showerrortoast,setshowerrortoast] = useState(false);
    const[invalidmsg,setinvalidmsg] = useState(false);
    const[passinvalidmsg,setpassinvalidmsg] = useState(false);


    
    const handleopensignup = () =>{
          navigate("/signup")
    }

    const handleloginemail = (val:any) =>{
        setloginemail(val)
    }
  
    const handleloginpass = (val:string) =>{
             setloginpass(val)
    }
    const handleSignin = () =>{
        
        if(isuserverified){
        navigate("/home")
        }
        else{
          setshowerrortoast(true);
        }
        setisuserLoggedin(true);
    }

    const handleuserverified = () =>{
        if(logindata.some((user:any)=> (user.email === loginemail && user.password === loginpass))){
            setisuserverified(true);
            
        }
        else{
            setisuserverified(false);
        }
    }

    useEffect(()=>{

   
        if(loginemail.length>0){
  setinvalidmsg(!validateEmail(loginemail));
        }
    
      if(loginpass.length<8 && loginpass.length>0){
        setpassinvalidmsg(true);
      }
      else{
        setpassinvalidmsg(false)
      }
        setshowerrortoast(false);
        handleuserverified();
    },[loginemail,loginpass])
    console.log(passinvalidmsg,loginpass.length);
    
  return (
    <>
   
    <div className="login-wrapper">
  
  <section>
 
        <section className='Login-Form'>
   

            <section className='Loginform-header'>
                <div className='lgn-head'>
            <div className='Login-header'>
                <span className='welcome-msg'>Welcome to</span>
                <span className='c-name'>OPPEX-AI</span>
            </div>
            <span className='sign-in'>Sign in</span>
            </div>

            <div className='signup-cnt'>
                <span className='no-accnt'>No Account?</span>
                <button onClick={()=>handleopensignup()} className='signup-btn'>Sign Up</button>
            </div>
            </section>

            <section className='Signin-form'>

    

                <section className='email-cnt'>
                    <span>Enter your email address</span>
                    <input onInput={(e)=>handleloginemail(e.currentTarget.value)} placeholder='email address' className='email-input' type="text" />
                    {invalidmsg?
                    <span className='fieldemailerror'>Invalid Email!</span>
                    :
                    null
}
                </section>


                <section className='password-cnt'>
                    <span>Enter your Password</span>
                    <input onChange={(e)=>handleloginpass(e.currentTarget.value)} placeholder='password' className='password-input' type="password" />
                    {passinvalidmsg&&
                    <span className='fieldemailerror'>Password Length must be greater than or equal to 8</span>
}
                </section>
                <section className='Signin-btn-cnt'>
                <button onClick={()=>handleSignin()} className='signin-btn'> <span className='signin-txt'>Sign in</span> </button>

    
            </section>
            {showerrortoast&&
    <section className='error-toast'>
    <div className='error-msg'>
        Your email is not validated please validate you email,please sign up
    </div>
    </section>
}
            </section>

         
        </section>
        </section>
    </div>

    </>
  )
}
export default Login
