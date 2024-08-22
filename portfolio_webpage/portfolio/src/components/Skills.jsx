import css from "../images/skills/css.png"
import js from "../images/skills/js.png"
import react from "../images/skills/react.png"
import word from "../images/skills/word.png"
import pp from "../images/skills/pp.png"
import excel from "../images/skills/excel.png"
import ps from "../images/skills/ps.png"
import illustrator from "../images/skills/illustrator.png"
import SkillItem from "./Item/SkillItem.jsx"
import starts from '../images/stars.png'


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
                <SkillItem img={css} name='HTML/CSS' starts={starts}/>
                <SkillItem img={js} name='JavaScript' starts={starts}/> 
                <SkillItem img={react} name='React JS' starts={starts}/> 
                <SkillItem img={word} name='Microsoft Word' starts={starts}/> 
                <SkillItem img={pp} name='Microsoft PowerPoint' starts={starts}/> 
                <SkillItem img={excel} name='Microsoft Excel' starts={starts}/> 
                <SkillItem img={ps} name='Adobe Photoshop' starts={starts}/>
                <SkillItem img={illustrator} name='Adobe Illustrator' starts={starts}/>
                
                 
                
                   
            </div>
                
      </div>
  </section>





    )
}