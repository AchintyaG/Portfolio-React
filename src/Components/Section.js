import React from "react";
import '../style.css';

const Section=({title ,des}) => {
    return(        
        <div className="section">
            <hr/>
            <h2>{title}</h2>
            <p>{des}</p>
        </div>
        )
}
export default Section;