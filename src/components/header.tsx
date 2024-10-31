import Link from "next/link"
import "../../src/style/header.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { GrServices } from "react-icons/gr";

function Header(){
     return(
              <div className="header">
                {/* logo */}
                  
                   <span className="logo">M<FaRegHeart className="heart-icon"/>A</span>
                   
                {/* links */}
                 
                    <ul className="nav-link">
                    <li>
                          <Link className="nav-links" href="/"><FaHome className="head-icon"/></Link>
                   </li>
                    <li>
                          <Link  className="nav-links" href="/about"><FaUserGraduate className="head-icon"/></Link>
                    </li>
                    <li>
                          <Link className="nav-links" href="/contact"><MdOutlineContactMail className="head-icon"/></Link>
                     </li>
                     <li>
                          <Link  className="nav-links" href="/services"><GrServices className="head-icon"/></Link>
                     </li>
                    
                    </ul>
                 

              </div>
     )
}
export default Header