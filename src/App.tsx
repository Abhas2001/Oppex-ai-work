
 import * as React from 'react';
import { createContext,  useState } from 'react'



import './App.css'






interface UserContextType {
  showsignup: boolean;
  isuserLoggedin:boolean;
  logindata:any;
  loginemail:string;
  setshowsignup: React.Dispatch<React.SetStateAction<boolean>>;
  setisuserLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
  setlogindata:React.Dispatch<React.SetStateAction<any>>;
  setloginemail:React.Dispatch<React.SetStateAction<any>>;
}
export const usercontext = createContext<UserContextType>({
  showsignup: false,
  isuserLoggedin:false,
  logindata:[],
  loginemail:'',
  setisuserLoggedin:()=>{},
  setshowsignup: () => {},
  setlogindata: ()=> {},
  setloginemail: ()=> {}
});
function App() {
//   const[showsignup,setshowsignup] = useState(false);
//  const [isuserLoggedin,setisuserLoggedin] = useState(false);
//  const[loginemail,setloginemail] = useState('');
//  const [logindata, setlogindata] = useState<{ email: string; password: string; username:string}[]>(() => {
//   const storedData = localStorage.getItem('logindata');
//   return storedData ? JSON.parse(storedData) : [];
// });


//  useEffect(() => {
//   localStorage.setItem('logindata', JSON.stringify(logindata));
// }, [logindata]);

const [loginemail, setloginemail] = useState('');
const [loginpassword, setloginpassword] = useState('');

const[loginemaildata,setloginemaildata] = useState<{email: string}[]>([]);


const handleLoginemail = (email:string) =>{
  setloginemail(email);
}
const handleLoginpassword = (password:string) =>{
  setloginpassword(password);
}

const apiUrl = 'http://localhost:5000'; // Replace with your actual API URL
const handleLogin = async() => {
  const response  =  await fetch('http://localhost:5000/login',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
       email : loginemail,
        password:loginpassword // replace with actual password input  
    })
 
  })

  

  console.log(response);
  
}

const handlegetlogindata = async() =>{

    const loginres = await fetch(`${apiUrl}/getlogindata`)
    const data = await loginres.json();
  setloginemaildata(data);
      
  }

  return (
    <>
    {/* <usercontext.Provider value={{ showsignup, setshowsignup,isuserLoggedin,setisuserLoggedin,logindata,setlogindata,loginemail,setloginemail }}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </usercontext.Provider> */}


    <div>
    <span>email</span>
 <input onChange={(e)=>handleLoginemail(e.target.value)} type="text" />
<span>password</span>
 <input onChange={(e)=>handleLoginpassword(e.target.value)} type="text" name="" id="" />

 <button onClick={handleLogin}>Login</button>

 <button onClick={handlegetlogindata}>getlogindata</button>


 <div>
  { loginemaildata.map((x)=>{
    return(
       
  <span>{x.email?x.email:''}</span>
    )
  })

 
   } </div>
    </div>
    </>
  )
}

export default App
