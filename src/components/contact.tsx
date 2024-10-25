import "../style/contact.css";

function Contact(){
    return(
        <div className="container">
            <div className="contact-box-cantainer">
                <div className="contact-box1">
                    <form action="" className="form">
                        <input className="input" type="text" placeholder="Your Full Name"required /> <br />
                        <input className="input" type="email" placeholder="Your Email "required /> <br />
                        <input className="input" type="text" placeholder="Subject"required /> <br />
                        <input className="input-msg" type="text" placeholder="Your Message"required /> <br />
                        <input type="button" value="Submit" className="submit-btn"/>
                    </form>
                </div>
                <div className="contact-box2">
                    {/* box create information  */}
                </div>
            </div>
        </div>
    )
}
export default Contact