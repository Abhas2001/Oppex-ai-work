
 import * as React from 'react';
import { createContext, useEffect, useState } from 'react'



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
const[flag,setflag] = useState(false);  
const[message,setmessage] = useState<string>(''); 
const[data,setdata] = useState<any>([]);
const[id,setid] = useState(0);

async function getdata(){
const response = await fetch(`https://oppex-ai-backend.onrender.com/qoutes/?limit=${id}`)
console.log(response);

const data = await response.json();
setdata(data);
}

useEffect(()=>{
  console.log(data);
},[data])

   

useEffect(() => {
  console.log("Flag value changed:", flag);
}, [flag]);

useEffect(() => {
  if (id === 0) {
    return; // Prevent initial fetch when id is 0
  }
  getdata();      
}, [id]);

const handlesenddata = () => {
  setid(id + 1);

  console.log("jshdgkdhkjsh");
  setflag(true);

  console.log(flag);
}

const handlesenddatamessage = (name:string) =>{

  
  setmessage(name);
  console.log(message);

}

  return (
    <>
    {/* <usercontext.Provider value={{ showsignup, setshowsignup,isuserLoggedin,setisuserLoggedin,logindata,setlogindata,loginemail,setloginemail }}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </usercontext.Provider> */}


    <div>
    <div>
      {
        data.map((item:any) => {
          return (
            <div key={item.id}>
              <h1>{item.text}</h1>
             
            </div>
          )
        })
      }
    </div>
    <input onChange={(e)=>handlesenddatamessage(e.currentTarget.value)} type="text" />
    <button onClick={handlesenddata}>Click Me</button>
    </div>
    </>
  )
}

export default App
