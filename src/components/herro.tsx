import Image from "next/image"
import "../../src/style/herro.css";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function Herro(){
    return(
        <div className="herro-container">
              <div className="box-cntainer">
               
                 {/* sm screen image */}
                 <div className="hero-right">
                    {/* image */}
                    <div className="hero-image-box">
                       <Image src={"/images/muzaffar.png"}
                        width={200}
                        height={200}
                        className="image-hero"
                       alt="profile-pic" ></Image>
                    </div>
               </div>

               {/* left */}
               <div className="hero-left">
                    <div className="hero-content-box"></div>
                   <h1 className="herro-heading">I&apos;m Muzaffar Ali  <br />
                    <p className="fornt-end">Front-end</p> Developer</h1>
                   <p className="hero-pragrahp">Web Developer with a knack for solving complex coding challenges."
                     Expert in debugging and optimizing web applications.
                     "Turning errors into smooth, functional solutions.</p>
                   <button className="hero-btn">HIRE ME <HiMiniArrowTopRightOnSquare className="arrow-btn"/></button>

               </div>

               {/* right */}
               <div className="hero-right2">
                    {/* image */}
                    <div className="hero-image-box2">
                       <Image src={"/images/muzaffar.png"}
                        width={200}
                        height={200}
                        className="image-hero"
                       alt="profile-pic" ></Image>
                    </div>
               </div>

              </div>
        </div>
    )
}
export default Herro