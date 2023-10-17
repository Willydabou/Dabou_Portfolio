import React from "react";

export const About = React.forwardRef((props, ref) =>{
    return (
        <div ref={ref} className="">
            
            <div className="md:mx-16 mx-8 my-8 bg-gradient-to-r from-slate-300 to-blue-500  border-2 drop-shadow-xl p-6 rounded-md">
                <h4 className="text-2xl my-8" >Willy Hilarien DABOU</h4>
                <span>A highly motivated professional with strong education background in Computer Science.<br/> Currently living in Cairo, Egypt.<br/> I am a freshly graduate student from 
                    Faculty of Computer Science and Artificial Intelligence Cairo University, 
                    Information System departement.<br/>I love web development and data analysis but I'm more 
                    passionate about data driven computation. I am a dedicated data enthusiast whith a relentless 
                    curiosity for uncovering insights from raw information.<br/> My journey composed experiences in data
                    visualization, data analysis and web development have honed my analytical and technical skills. Also, a commitment
                     for excellent customer service delivery with effective communication and problem-solving abilities.   
                </span>
            </div>
        </div>
    );
});