import Link from "next/link"
import "../../src/style/header.css";


function Header(){
     return(
              <div className="header">
                {/* logo */}
                  
                   <span className="logo">Muzaffar</span>
                   
                {/* links */}
                 
                    <ul className="nav-link">
                    <li>
                          <Link className="nav-links" href="/">Home</Link>
                   </li>
                    <li>
                          <Link  className="nav-links" href="/about">About</Link>
                    </li>
                    <li>
                          <Link className="nav-links" href="/contact">Contact</Link>
                     </li>
                     <li>
                          <Link  className="nav-links" href="/services">Services</Link>
                     </li>
                    
                    </ul>
                 

              </div>
     )
}
export default Header