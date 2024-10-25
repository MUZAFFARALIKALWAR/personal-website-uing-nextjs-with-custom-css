import { FaLaptopCode,FaFigma,} from "react-icons/fa";
import { GiSoundOn} from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineNoPhotography } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";
import "../../src/style/services.css";

function Services(){
    return(
        <main className="Services-container">
             <div className="Services-container2">
                 {/* top div */}
              <div className="Services-header-box">
                <h1 className="ser-title">My Services</h1>
                <p className="ser-des">Offering complete web solutions from development to design and optimization. Whether it&apos;s a stunning website, seamless user experience, or quick troubleshooting, I provide reliable services to meet your digital needs</p>
              </div>
              {/* boxes div */}
              <div className="boxes-container">
                    <div className="box">
                        <FaLaptopCode className="ser-icon"/>
                        <h2 className="web">Web Development</h2>
                        <span className="Title-box">Blog, E-Commerce</span>
                    </div>
                    <div className="box">
                        <FaFigma className="ser-icon"/>
                        <h2 className="web">UI/UX Design</h2>
                        <span className="Title-box">Mobile App, Website Design</span>
                    </div>
                    <div className="box">
                        <GiSoundOn className="ser-icon"/>
                        <h2 className="web">Sound Design</h2>
                        <span className="Title-box">Voice Over, Beat Making</span>
                    </div>
                    <div className="box">
                        <IoGameControllerOutline className="ser-icon"/>
                        <h2 className="web">Game Design</h2>
                        <span className="Title-box">Character Design, Props & Objects</span>
                    </div>
                    <div className="box">
                        <MdOutlineNoPhotography className="ser-icon"/>
                        <h2 className="web">Photography</h2>
                        <span className="Title-box">portrait, product photography</span>
                    </div>
                    <div className="box">
                        <CiMobile4 className="ser-icon"/>
                        <h2 className="web">App Development</h2>
                        <span className="Title-box">Blog, E-Commerce</span>
                    </div>
                    
              </div>

             </div>
        </main>
    )
}
export default Services