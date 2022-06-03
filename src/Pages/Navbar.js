// import Hamburger from '../img/hamburger.png'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import '../Assests/Navbar.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube,FaSearch } from 'react-icons/fa';
// import logo from '../img/logo.png'
export default function Navbar() {
    const [term, setterm] = useState(false);
    const TermClick=()=>{
        setterm(!term);
    }
    const Closeterm=()=>{
        setterm(false);
      }
      const closeCancel=()=>{
        setterm(false);
      }
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                    <Link className="navbar-brand text-light" to="/">Aries<span>Tech</span></Link>
                        <button onClick={TermClick} className="navbar-toggler"  >
                        {term?
                                                <div className='term'>
                                                    <div className='inner_term'>
                                                  <div className='term_header'>
                                                  <Link className="navbar-brand text-light" to="/">Ari<span>es.</span></Link>
                                                    <button onClick={Closeterm}>X</button>
                                                  </div>
                                                  <div>
                                                  <ul className="navbar-nav ">
                                                    <li className="nav-item active"><Link  to="/" className="nav-link">Home</Link> </li>
                                                    <li className="nav-item"><Link className="nav-link" to="/Categories"> Categories</Link></li>
                                                    <li className="nav-item"><Link to="/AboutUs" className="nav-link" > About Us</Link></li>
                                                    <li className="nav-item"><Link to="/Blog1" className="nav-link" > Blog</Link></li>

                                                    <li className="nav-item"><Link to="/LoginPage" className="nav-link" > Login</Link></li>
                                                    <div className='forcreatorbtn'>
                                                    <Link to='/Why1' class='forcreators'>For creators</Link>
                                                    </div>
                                                  </ul>



                                  
                                                  </div>
                                                  </div>
                                                </div>
                                             :""}
                                          <Link className="navbar-brand text-light" to="/">Ari<span>es.</span></Link>
                                        </button>
                                        <div className="collapse navbar-collapse" id="main_nav">

                                        <div className="search-nabar "style={{display:'none'}}>
                                <input type="text"
                                    id="searchnav"
                                   name="fname"
                                    placeholder='Search...' />
                                <Link to='/'><FaSearch /></Link>
                            
                            </div>
                                            <ul className="navbar-nav ">
                                                <li className="nav-item active"> <Link  to="/" className="nav-link">Home</Link> </li>
                                                <li className="nav-item"><Link className="nav-link" to="/Categories"> Categories</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/AboutUs"> About Us</Link></li>
                                                <li className="nav-item"><Link to="/Blog1" className="nav-link" > Blog</Link></li>
                                                <li className="nav-item"><Link to="/LoginPage" className="nav-link"> Login</Link></li>
                                            </ul>
                            <div classNameName="contact_btn">
                                <Link to='/Why1'><button className='watch'>For creators</button></Link>
                            </div>
                            <div className="social_fa">
                                <Link to='/'><FaInstagram /></Link>
                                <Link to='/'><FaTwitter /></Link>
                                <Link to='/'><FaFacebook /></Link>
                                <Link to='/'><FaYoutube /></Link>
                            </div>
                        </div>
                    </div>
            </nav>
        </>
    )

}

