import "../style/education.css";



function Education(){
    return(
        <main className="education-container">
             <div className="education-container2">
                 {/* top div */}
              <div className="education-header-box">
                <h1 className="education-title">Education</h1>
                <p className="education-des">Trusted by Professionals for Exceptional Quality and Service
                Our clients from various industries trust us to deliver top-notch quality and results. Here&apos;s what they have to say about our work..</p>
              </div>
              {/* boxes div */}
              <div className="education-box-container">
              
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">University of Karachi</h2>
                    <span className="uni-stu ">Student</span> <span className="uni-date">Starting 2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name ">Bachelor in Computer Science</h2>
                    <p className="uni-des ">I am pursuing a Bachelor&apos;s degree in Computer Science at the prestigious University of Karachi, starting in 2024. This program will provide a solid foundation in programming, software development, and data analysis.</p>
                </div>
              </div>
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Governor IT Initiative</h2>
                    <span className="uni-stu">Student</span> <span className="uni-date">Starting Feb 2024</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name">Certified Web 3.0 and metaverse</h2>
                    <p className="uni-des">
                    At the Governor IT Initiative, students explore AI, Metaverse, and Blockchain technologies in an accessible manner. This free program is an excellent opportunity for those interested in these innovative fields.</p>
                </div>
              </div>
              <div className="education-box">
                {/* left */}
                <div className="left-box">
                    <h2 className="uni-name institue">Web Development</h2>
                    <span className="uni-stu">Completed</span> <span className="uni-date"> Dec-25-2023</span>
                </div>
                {/* right */}
                <div className="right-box">
                    <h2 className="uni-name">Certificate of web training</h2>
                    <p className="uni-des">At Smit, students gain knowledge in web development, digital marketing, and freelancing from exceptional teachers. They offer valuable mentorship, equipping students with practical skills essential for career success.</p>
                </div>
              </div>

              </div> 



              </div>
        </main>
    )
}
export default Education