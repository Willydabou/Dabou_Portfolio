import React from "react";
import { Link } from "react-router-dom"


export const Project = React.forwardRef((props, ref) =>{

    const MyProjects = [
        {
            title:'Graduation Project',
            type: 'Web development',
            description: 'Training management system (TMS) is web app designed to automate the management of training programs for organizations. The system provides a centralized platform for creating, scheduling, and tracking training courses, as well as managing registrations and other educational resources. ',
            where:'Github link of the project',
            link: 'https://github.com/TMS-GP'
        },
        {
            title:'Covid19',
            type: 'Data Analytics',
            description: 'Covid19 evolution analysis with ......',
            where:'Google colab link of the project',
            link:'https://colab.research.google.com/drive/1RC6LtNj3bhngHSD-skQvQ76h8qXmqn-3?usp=sharing'
        },
        {
            title:'Crowdfunding',
            type: 'Web development',
            description: 'A responsive crowdfunding web app developped during my trining at DNA Webhosting using React js and Tailwind Css',
            where:'Github link of the project',
            link: 'https://github.com/Willydabou/crowdfunding'
        },
        {
            title:'Project B',
            type: 'Data Analytics',
            description: 'Covid19 evolution analysis with ......',
            where:'Github link of the project',
            link: 'https://github.com/TMS-GP'
        }
    
    ]

    return(
        <div ref={ref} className="my-6">
            <h2 className="md:mx-16 mx-8 my-6 text-2xl font-bold py-1 border-b-2 border-blue-500">My projects</h2>
            <div className="md:mx-14 mx-6 grid grid-cols-2">
                {
                    MyProjects.map((myProject)=>(
                        <div className=" border-2 bg-slate-200 drop-shadow-xl rounded-md my-4 md:mx-2 mx-1" >
                            <h3 className="bg-blue-400 md:px-6 px-2 py-4 mb-2 md:text-md text-sm font-bold text-white" >{myProject.title}</h3>
                            <div className="md:mx-4 mx-2">
                                <h4 className="my-4 md:text-base text-sm font-semibold" >{myProject.type}</h4>
                                <span className="text-sm my-4">{myProject.description}</span><br/>
                                <Link to={myProject.link} className="mt-2 mb-4 text-blue-700">{myProject.where}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
});