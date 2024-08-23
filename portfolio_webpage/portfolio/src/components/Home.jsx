import hero_bg from "../images/backgroundImg.png"
import sliderImg from  "../images/photo1.png"
import AboutMe from "./AboutMe.jsx"
import ContactMe from "./ContactMe.jsx"
import Footer from "./Footer.jsx"
import Projects from "./Projects.jsx"
import Skills from "./Skills.jsx"
import fb from "../images/fb_logo.png"
import link from "../images/link_logo.png"
import gitHub from '../images/GitHub-Logo.png'
import eng from "../images/eng.png"


export default function Home(){
    return (<><div className="hero_area">
        <div className="hero_bg_box" >
            <div className="bg_img_box">
                <img src={hero_bg} alt=""></img>   
            </div></div>

            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <div className="navbar-brand">
                            
                            <a href=" "><img src={eng} alt=" "></img></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="about.html"> Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html"> About me</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="service.html">Skills</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="why.html">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="team.html">Contact</a>
                                    </li>
                                                                       
                    
                                </ul>
                        </div>
                    </nav>
                </div>
                </header>
                
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="detail-box">
                                                <p id="Hello">Hello, <span>I'm</span></p>
                                                <h1>Nikola Nikolic</h1>
                                                <p>A <span> Front-end developer </span>From Serbia</p>
                                                <div className="row">
                                                    <div className="iconLine">
                                                        <a href=" "><img src={fb} alt=""></img></a>
                                                        <a href="  "><img src={gitHub} alt=""></img></a>
                                                        <a href="  "><img src={link} alt=""></img></a>
                                                    </div>
                                                    <div className="button" href=" ">Download CV</div>
                                                    

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={sliderImg} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section>
        </div>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <ContactMe/>
        <Footer/>
        
        
        
        </>
    




  
    
    
    )
}