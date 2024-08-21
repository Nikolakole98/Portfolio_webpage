export default function ContactMe(){
    return(
 <section className="contactMe_section layout_padding">   
    <div className="container">       
        <div className="heading_container heading_center">
            <h2>
                Contact <span>Me</span>
            </h2>                   
        </div>        
         <div className="formInfo">
            <div className="row1">
                <input id='fullName' name='Name' placeholder="FullName:" required/>
                <input id='email' name='email' placeholder="Email:" type="email" required/>
            </div>
            <div className="row2">
                <input id='title' name='Title' placeholder="Title:" required/>    
            </div>
            <div className="row3">
                <input id='title' name='Title' placeholder="Title:" required/>    
            </div>
            <div className="rowButton">
            <button type="submit">Subscribe</button>
         </div>   
         </div>
         

                
    </div>  
 </section>





       



        





    )
}