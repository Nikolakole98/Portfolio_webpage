import s1 from "../images/about-img.jpg"
import ProjectItem from "./Item/ProjectItem"

export default function Projects(){
    return(
    <section className="project_section layout_padding">   
        <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        My <span>Projects</span>
                    </h2>            
                </div>                
                 <div className="carousel-wrap ">       
                    <div className="owl-carousel row">
                        <ProjectItem img={s1} name='React JS'/>
                        <ProjectItem img={s1} name='React JS'/> 
                        
                   
                    </div>             
                 </div>       
             </div>                                      
  </section>
    )
}