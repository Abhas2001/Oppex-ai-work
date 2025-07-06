
 import * as React from 'react';
import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';


import './App.css'
import Navigation from './Navigation';

interface UserContextType {
  showsignup: boolean;
  isuserLoggedin:boolean;
  logindata:any;
  setshowsignup: React.Dispatch<React.SetStateAction<boolean>>;
  setisuserLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
  setlogindata:React.Dispatch<React.SetStateAction<any>>;
}
export const usercontext = createContext<UserContextType>({
  showsignup: false,
  isuserLoggedin:false,
  logindata:[],
  setisuserLoggedin:()=>{},
  setshowsignup: () => {},
  setlogindata: ()=> {}
});
function App() {
  const[showsignup,setshowsignup] = useState(false);
 const [isuserLoggedin,setisuserLoggedin] = useState(false);
 const[logindata,setlogindata] = useState<{ email: string; password: string }[]>([])

  return (
    <>
    <usercontext.Provider value={{ showsignup, setshowsignup,isuserLoggedin,setisuserLoggedin,logindata,setlogindata }}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </usercontext.Provider>
    </>
  )
}

export default App
