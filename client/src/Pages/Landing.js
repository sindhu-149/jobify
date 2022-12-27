import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/Testing"
import { Logo } from "../components"
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    
    <Wrapper>
        <nav>
          <Logo />
        </nav>

        <div className="container page">
            {/* info */}
            <div className='info'>
            <h1>Job <span>Tracking</span> App</h1>
            <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!
            Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
            <Link to="/register" className="btn btn-hero">Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className="img main-img"></img>
        </div>    

    </Wrapper>
  )
}


export default Landing