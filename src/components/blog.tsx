import Image from "next/image";
import "../style/blog.css";
import Link from "next/link";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";




function Blog(){
    return(
        <main className="blog-container">
             <div className="blog-container2">
                 {/* top div */}
              <div className="blog-header-box">
                <h1 className="blog-title">Blog</h1>
                <p className="blog-des">Discover insights, tutorials, and projects in web development, AI, and tech. Empower yourself with knowledge to build, grow, and innovate</p>
              </div>
              {/* boxes div */}
              <div className="blog-box-container">
              <div className="blog-box">
                <Image src={"/images/Ecommerce.jfif"}
                width={100}
                height={100}
                className="blog-images"
                alt="blogimages"></Image>
                <h2 className="web-heading">How to Make E-Commerce Website</h2>
                <p className="web-title">I built a responsive e-commerce site with Next.js and Tailwind CSS, tackling state management and cross-device compatibility challenges.</p>
                <Link className="watch-btn1" href={"https://youtu.be/baLdGxd9FBA?si=2PhNk_Om7NidHNO0"}>Watch Now <HiMiniArrowTopRightOnSquare className="arrow"/></Link>              </div>
              <div className="blog-box">
                <Image src={"/images/businesscard.jfif"}
                width={100}
                height={100}
                className="blog-images"
                alt="blogimages"></Image>
                <h2 className="web-heading">Creating a Business Card</h2>
                <p className="web-title">I designed a professional business card emphasizing simplicity and branding to create a lasting impression and convey essential information effectively.</p>
                <Link className="watch-btn2" href={"/"}>Watch Now <HiMiniArrowTopRightOnSquare className="arrow"/></Link>              </div>
              <div className="blog-box">
                <Image src={"/images/Ai.jfif"}
                width={100}
                height={100}
                className="blog-images"
                alt="blogimages"></Image>
                <h2 className="web-heading">Exploring the World of AI</h2>
                <p className="web-title AI">I explored the fundamentals of AI, focusing on its applications in automation, machine learning, and data-driven decision-making.</p>
                <Link className="watch-btn3" href={"/"}>Watch Now <HiMiniArrowTopRightOnSquare className="arrow"/></Link>
              </div>
                
                    
              </div>
             </div>
        </main>
    )
}
export default Blog