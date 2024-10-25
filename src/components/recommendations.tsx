import Image from "next/image";
import "../style/recommendations.css";
import { MdOutlineStarRate } from "react-icons/md";



function Recommendations(){
    return(
        <main className="recomm-container">
             <div className="recomm-container2">
                 {/* top div */}
              <div className="recomm-header-box">
                <h1 className="recomm-title">Recommendations</h1>
                <p className="recomm-des">Trusted by Professionals for Exceptional Quality and Service
                Our clients from various industries trust us to deliver top-notch quality and results. Here&apos;s what they have to say about our work..</p>
              </div>
              {/* boxes div */}
              <div className="recomm-box-container">
              <div className="recomm-box">
                    <div className="recomm-star">
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                        </div>
                        <h2 className="recomm-box-head">Great Experience!</h2>
                        <p className="recomm-box-title">Working with the team was smooth and professional. They delivered exactly what I needed, right on time.
                        </p>
                        {/* client profiles */}
                         <div className="client-profiles-box">
                            <Image src={"/images/james.png"}
                             width={100}
                             height={100}
                             className="client-profile"
                            alt="Client-profiles"></Image>
                            <div className="cint-content">
                            <h2 className="cleint-name">James Gouse</h2>
                            <p className="clint-deprmnt">Graphic Designer</p>
                            </div>
                         </div>
                    </div>
                    <div className="recomm-box">
                    <div className="recomm-star">
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                        </div>
                        <h2 className="recomm-box-head">Great Quality!</h2>
                        <p className="recomm-box-title">The process was smooth, and the results were amazing. I&apos;m very satisfied with the quality of work.</p>
                        {/* client profiles */}
                         <div className="client-profiles-box">
                            <Image src={"/images/Taina.png"}
                             width={100}
                             height={100}
                             className="client-profile"
                            alt="Client-profiles"></Image>
                            <div className="cint-content">
                            <h2 className="cleint-name">Tiana Philips</h2>
                            <p className="clint-deprmnt">Photographer</p>
                            </div>
                         </div>
                    </div>
                    <div className="recomm-box">
                    <div className="recomm-star">
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                           <MdOutlineStarRate className="star"/>
                        </div>
                        <h2 className="recomm-box-head">Amazing work!</h2>
                        <p className="recomm-box-title">Their work exceeded my expectations in every way. The final product was better than I imagined.</p>
                        {/* client profiles */}
                         <div className="client-profiles-box">
                            <Image src={"/images/Talan-wester.png"}
                             width={100}
                             height={100}
                             className="client-profile"
                            alt="Client-profiles"></Image>
                            <div className="cint-content">
                            <h2 className="cleint-name">Talan Westervelt</h2>
                            <p className="clint-deprmnt">Business man</p>
                            </div>
                         </div>
                    </div>
                
                    
              </div>
             </div>
        </main>
    )
}
export default Recommendations