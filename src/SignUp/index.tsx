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
    const[passinvalidmsg,setpassinvalidmsg] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [otpdata, setotpdata] = useState<{ otp: string } | null>(null);

    const [showOtpField, setshowOtpField] = useState(false);
const [enteredOtp, setenteredOtp] = useState('');
const [otpError, setotpError] = useState('');

    const navigate = useNavigate()

    const verifyOtpAndSignup = () => {
        if (enteredOtp === otpdata?.otp) {
          setlogindata((prev: any) => [
            ...prev,
            { email: signupemail, password: signuppassword, username: firstname },
          ]);
          navigate("/home");
        } else {
          setotpError("Invalid OTP. Please try again.");
        }
      };
      
const handleshowsignin = () =>{
          navigate("/")
    }

    const sendOTP = async (email: string) => {
        try {
          const response = await fetch("https://oppex-ai-backend.onrender.com/send-otp", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
          });
      
          const data = await response.json();
          setotpdata(data);
          console.log(data,"DATA HAI BETA"); 
        } catch (error) {
          console.error("Error sending OTP:", error);
        }
      };
      

      console.log(otpdata);
      
      

    const handleemail = (val: string) => {
          setsignupemail(val);
      };
    const handlepassword = (val: string) => {
        setsignuppasssword(val);
      };

      const handlesignup = async() =>{
        console.log("gotohome");
        await sendOTP(signupemail);
        setlogindata((prev:any)=>[...prev,{email:signupemail,password:signuppassword,username:firstname}])
        setshowOtpField(true);
      
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
        else{
            setinvalidmsg(false);
        }
        if(signuppassword.length<8 && signuppassword.length>0){
            setpassinvalidmsg(true);
          }
          else{
            setpassinvalidmsg(false)
          }
      
      },[signupemail,signuppassword])
 
      useEffect(()=>{
        setfirstname('');
        setlastname('');
        setsignupemail('');
        setsignuppasssword('');
      },[])

      console.log(firstname,lastname);
      

      
    
    return (
        <div className="login-wrapper">
  <section className="Login-Form">
    <section className="Loginform-header">
      <div className="lgn-head">
        <div className="Login-header">
          <span className="welcome-msg">Welcome to</span>
          <span className="c-name">OPPEX-AI</span>
        </div>
        <span className="sign-in">Sign Up</span>
      </div>

      <div className="signup-cnt">
        <span className="no-accnt">No Account?</span>
        <button onClick={handleshowsignin} className="signup-btn">
          Sign in
        </button>
      </div>
    </section>

    <section className="Signin-form">
      
    
      {showOtpField && (
        <section className="otp-field">
          <span>Enter OTP sent to your email</span>
          <input
            value={enteredOtp}
            onChange={(e) => setenteredOtp(e.currentTarget.value)}
            maxLength={6}
            className="email-input"
            placeholder="Enter 6-digit OTP"
          />
          {otpError && <span className="fieldemailerror">{otpError}</span>}
          <button onClick={verifyOtpAndSignup} className="signin-otp-btn">
            Verify & Sign Up
          </button>
        </section>
      )}

 
      {!showOtpField && (
        <>
          <section className="email-cnt">
            <span>Enter your email address</span>
            <input
              onBlur={() => setEmailTouched(true)}
              value={signupemail}
              onChange={(e) => {
                setEmailTouched(false);
                handleemail(e.currentTarget.value);
              }}
              placeholder="email address"
              className="email-input"
              type="text"
            />
            {invalidmsg && emailTouched && (
              <span className="fieldemailerror">Invalid Email!</span>
            )}
          </section>

          <section className="userdetails-cnt">
            <div className="username-cnt">
              <span>First name</span>
              <input
                onInput={(e) => handlefirstname(e.currentTarget.value)}
                placeholder="First name"
                className="email-input"
                type="text"
              />
            </div>

            <div>
              <span>Last Name</span>
              <input
                value={lastname}
                onChange={(e) => handlelastname(e.currentTarget.value)}
                placeholder="Last Name"
                className="email-input"
                type="text"
              />
            </div>
          </section>

          <section className="password-cnt">
            <span>Enter your Password</span>
            <input
              onInput={(e) => handlepassword(e.currentTarget.value)}
              placeholder="password"
              className="password-input"
              type="password"
            />
            {passinvalidmsg && (
              <span className="fieldemailerror">
                Password must be at least 8 characters
              </span>
            )}
          </section>

          <section className="Signin-btn-cnt">
            <button onClick={handlesignup} className="signin-btn">
              <span className="signin-txt">Sign Up</span>
            </button>
          </section>
        </>
      )}
    </section>
  </section>
</div>

      )
}

export default Signup
