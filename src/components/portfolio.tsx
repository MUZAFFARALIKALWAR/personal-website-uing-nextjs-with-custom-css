import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import "../style/portfolio.css";

function Portfolio(){
    return(
        <main className="portfolio-container">
             <div className="portfolio-container2">
                 {/* top div */}
              <div className="portfolio-header-box">
                <h1 className="portfolio-title">Portfolio</h1>
                <p className="portfolio-des">This portfolio showcases my journey in web development, academic achievements, and professional growth. It highlights my skills, projects, and dedication to continuous learning.</p>
              </div>
              <div className="port-link-container">
                <ul className="port-links">
                    <li>All Categories</li>
                    <li>UI Design</li>
                    <li>Web Templates</li>
                    <li className="link-hide">Logo</li>
                    <li className="link-hide">Branding</li>
                </ul>
              </div>
              {/* boxes div */}
              <div className="portfolio-box-container">
              <div className="portfolio-box">
              <FaPlus className="plus-icon"/>
                <Image src={"/images/box5.png"}
                  width={200}
                  height={200}
                  className="box-images"
                alt="box-images"></Image>
              </div>
              <div className="portfolio-box">
              <FaPlus className="plus-icon"/>
                <Image src={"/images/box2.png"}
                  width={200}
                  height={200}
                  className="box-images"
                alt="box-images"></Image>
              </div>
              <div className="portfolio-box">
              <FaPlus className="plus-icon"/>
                <Image src={"/images/box3.png"}
                  width={200}
                  height={200}
                  className="box-images"
                alt="box-images"></Image>
              </div>
              <div className="portfolio-box">
              <FaPlus className="plus-icon"/>
                <Image src={"/images/box4.png"}
                  width={200}
                  height={200}
                  className="box-images"
                alt="box-images"></Image>
              </div>
              <div className="portfolio-box">
              <FaPlus className="plus-icon"/>
                <Image src={"/images/box1.png"}
                  width={200}
                  height={200}
                  className="box-images"
                alt="box-images"></Image>
              </div>
              <div className="portfolio-box">
              <FaPlus className="plus-icon"/>
                <Image src={"/images/box6.png"}
                  width={200}
                  height={200}
                  className="box-images"
                alt="box-images"></Image>
              </div>
              
             
                
                    
              </div>

             </div>
        </main>
    )
}
export default Portfolio