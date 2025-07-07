
 import * as React from 'react';
import { createContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';


import './App.css'
import Navigation from './Navigation';

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
  const[showsignup,setshowsignup] = useState(false);
 const [isuserLoggedin,setisuserLoggedin] = useState(false);
 const[loginemail,setloginemail] = useState('');
 const [logindata, setlogindata] = useState<{ email: string; password: string; username:string}[]>(() => {
  const storedData = localStorage.getItem('logindata');
  return storedData ? JSON.parse(storedData) : [];
});


 useEffect(() => {
  localStorage.setItem('logindata', JSON.stringify(logindata));
}, [logindata]);

  return (
    <>
    <usercontext.Provider value={{ showsignup, setshowsignup,isuserLoggedin,setisuserLoggedin,logindata,setlogindata,loginemail,setloginemail }}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </usercontext.Provider>
    </>
  )
}

export default App
