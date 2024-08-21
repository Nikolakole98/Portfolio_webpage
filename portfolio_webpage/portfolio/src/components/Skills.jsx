import s1 from "../images/skills/react.png"
import s2 from "../images/s2.png"
import s3 from "../images/s3.png"
import SkillItem from "./Item/SkillItem"


export default function Skills(){
    return(
    <section className="skills_section layout_padding">
         <div className="container ">
            <div className="heading_container heading_center">
                <h2>
                    My <span>Skills</span>
                </h2>               
            </div>
            <div className="row">
                <SkillItem img={s1} name='React JS'/>
                <SkillItem img={s2} name='React JS'/> 
                <SkillItem img={s3} name='React JS'/> 
                <SkillItem img={s3} name='React JS'/> 
                <SkillItem img={s3} name='React JS'/> 
                
                   
            </div>
                
      </div>
  </section>





    )
}