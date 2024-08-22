export default function ProjectItem({name,img}){
    return(    
    <div className="box">    
        <div className="img-box">
                <img src={img} alt=""/>    
        </div>               
        <div className="detail-box">    
            <div className="client_id">    
                <h4>{name}</h4>                    
            </div>        
             <p>       
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis 
            </p>        
            <div className="rowButton">        
                <button type="submit">Live Preview</button> 
                <button type="submit">GitHub Code</button>               
             </div>               
        </div>         
    </div>            
                                  
    )}