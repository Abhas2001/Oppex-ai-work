import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { usercontext } from '../App'
import './index.css'

const Home = () => {
   
    const{loginemail,logindata} = useContext(usercontext);
    const currentUser = logindata.find((user:any) => user.email === loginemail);
const username = currentUser?.username || '';
    const navigate = useNavigate()

    const handleLogout = () =>{
       navigate("/")
    }
  return (
    <>
    <section className="homepg-body">
        <section className='homepage-header'>
    <div className='cname-head'>
      Oppex-Ai
    </div>
  <div>
    
    <button onClick={()=>handleLogout()} className='logout'>
    &#8594; Logout 
    </button>
    </div>
    </section>

    <section className='bdy-cnt'>
        <span className='welcomehome-msg'>Welcome {username} To Oppex-Ai</span>
  
        <span className='msgcnt'>
        At Opex AI, we are building AI agents that will help software companies automate their production operations, <br />
         reducing time to resolve incidents, improving customer experience and boosting developer productivity.
        </span>
    </section>
    </section>
    </>
  )
}

export default Home
