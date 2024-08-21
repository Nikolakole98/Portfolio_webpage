import meImg from  "../images/about-img.jpg"


export default function AboutMe(){
    return(
    <section  className="service_section layout_padding">
        <div className="service_container">
            <div className="container  ">    
                <div className="heading_container heading_center">    
                       <h2>
                        About <span>Me</span>
                     </h2>        
                </div>
                <div className="box">
                        <div className="img-box">
                            <img src={meImg} alt=" "></img>

                        </div>
                        <p>
                        Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
                        here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                        are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                         the middle of text. All
                         Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti 
                         officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita. 
                     </p>






                      </div>         
            </div>
        </div>    
  </section>



    )
}