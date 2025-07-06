import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { usercontext } from "../App"
import { validateEmail } from "../utils/validateEmail"
import './index.css'


const Signup = () => {

    const {setlogindata} = useContext(usercontext);
    const[signupemail,setsignupemail] = useState('')
    const[signuppassword,setsignuppasssword] = useState('')
    const[firstname,setfirstname] = useState('');
    const[lastname,setlastname] = useState('');
    const[invalidmsg,setinvalidmsg] = useState(false);
    const navigate = useNavigate()

const handleshowsignin = () =>{
          navigate("/")
    }

    const handleemail = (val: string) => {
          setsignupemail(val);
      };
    const handlepassword = (val: string) => {
        setsignuppasssword(val);
      };

      const handlesignup = () =>{
        console.log("gotohome");
        
        setlogindata((prev:any)=>[...prev,{email:signupemail,password:signuppassword}])
        navigate("/home")
      }

      const handlefirstname =(val:string) =>{
            setfirstname(val);
      }
  
      const handlelastname = (val:string) =>{
          setlastname(val);
      }
      useEffect(()=>{
        if(signupemail.length>0){
        setinvalidmsg(!validateEmail(signupemail))
        }
      
      },[signupemail])
 
      useEffect(()=>{
        setfirstname('');
        setlastname('');
        setsignupemail('');
        setsignuppasssword('');
      },[])

      console.log(firstname,lastname);
      

      
    
    return (
        <div className="login-wrapper">
            <section className='Login-Form'>
    
                <section className='Loginform-header'>
                    <div className='lgn-head'>
                <div className='Login-header'>
                    <span className='welcome-msg'>Welcome to</span>
                    <span className='c-name'>OPPEX-AI</span>
                </div>
                <span className='sign-in'>Sign Up</span>
                </div>
    
                <div className='signup-cnt'>
                    <span className='no-accnt'>No Account?</span>
                    <button onClick={()=>handleshowsignin()} className='signup-btn'>Sign in</button>
                </div>
                </section>
    
                <section className='Signin-form'>
    
                   
    
                    <section className='email-cnt'>
                        <span>Enter your email address</span>
                        <input value={signupemail} onChange={(e)=>handleemail(e.currentTarget.value)} placeholder='email address' className='email-input' type="text" />
                        {invalidmsg?
                    <span className='fieldemailerror'>Invalid Email!</span>
                    :
                    null
}
                    </section>
                     

                    <section className='userdetails-cnt'>
                        <div className="username-cnt">
                        <span>First name</span>
                        <input onInput={(e)=>handlefirstname(e.currentTarget.value)} placeholder='username' className='email-input' type="text" />
                        </div>

                        <div >
                        <span>Last Name</span>
                        <input value={lastname} onChange={(e)=>handlelastname(e.currentTarget.value)} placeholder='Last Name' className='email-input' type="text" />
                        </div>
                    </section>
    
    
                    <section className='password-cnt'>
                        <span>Enter your Password</span>
                        <input onInput={(e)=>handlepassword(e.currentTarget.value)} placeholder='password' className='password-input' type="password" />
                    </section>
                    <section className='Signin-btn-cnt'>
                    <button onClick={()=>handlesignup()} className='signin-btn'> <span className='signin-txt'>Sign Up</span> </button>
                </section>
                </section>
    
             
            </section>
        </div>
      )
}

export default Signup
