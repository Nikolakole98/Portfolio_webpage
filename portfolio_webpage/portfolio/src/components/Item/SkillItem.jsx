
export default function SkillItem({name,img,starts}){
return(    
<div className="col-md-3">

<div className="box">               
        <div className="img-box">
            <img src={img} alt=""/>                
        </div>                                
        <div className="detail-box">
            <h6>{name}</h6>
            
         </div>
         <div className="rating">
            <img src={starts} alt=""/>  
         </div>                   
     </div>
       
                    
</div>                                
)}