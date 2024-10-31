import Image from "next/image";
import "../style/about.css";
import Link from "next/link";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook ,FaLinkedin} from "react-icons/fa";


function Aboutus(){
    return(
        <div className="about-container">
             <div className="about-boxes-container">
               
                <div className="box1">
                <Image src={"/images/muzaffar.png"}
                  width={100}
                  height={100}
                  className="images-about"
                  alt="MY-pic"></Image>

                   <ul className="social-links">
                    <li>
                        <Link href={"https://www.youtube.com/@muzaffaritacademy"}><IoLogoYoutube className="youtube"/></Link>
                    </li>
                    <li>
                        <Link href={"//"}><FaFacebook className="facebook"/></Link>
                    </li>
                    <li>
                        <Link href={"//"}><FaLinkedin className="linkedin"/></Link>
                    </li>
                    </ul> 
            
                </div>
                
                <div className="about-box2">
                    <h2 className="about-heading">About Me</h2>
                    <p className="about-title">I am <span className="bold">Muzaffar Ali Kalwar</span>, a passionate and detail-oriented Web Developer and AI enthusiast with a background in Computer Science from the University of Karachi. My journey spans across various domains, including Web Development, Data Analytics, and UI/UX Design, with hands-on experience in technologies like Next.js, Tailwind CSS, and TypeScript.</p>
                    <p className="about-title">I am currently pursuing advanced learning at the <span className="bold">Governor IT Initiative</span> under the guidance of top mentors like <span className="bold">Sir Hamzah Syed</span> and <span className="bold">Sir Ameen Alam.</span> Alongside my technical expertise, I focus on freelancing and content creation, helping others grow through educational YouTube videos on web development and AI topics.</p>
                    <p className="about-title">With a keen eye for design and a goal to leave a lasting impact, I recently created professional business cards and built responsive projects such as an e-commerce platform. I am always excited to collaborate and take on new challenges that align with my passion for technology and problem-solving.</p>
                </div>
             </div>
        </div>
    )
}
export default Aboutus