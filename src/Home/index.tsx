import { useNavigate } from 'react-router-dom'
import './index.css'

const Home = () => {

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

    <button onClick={()=>handleLogout()} className='logout'>
        Logout
    </button>
    </section>

    <section className='bdy-cnt'>
        <span className='welcomehome-msg'>Welcome To Oppex-Ai</span>
  
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
