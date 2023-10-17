
import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import { About } from '../About/About';
import { Project } from '../Project/Project';
import { Navbar } from '../Navbar/Navbar';
import { Experience } from '../Experience/Experience';

export const Home = () =>{

    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);

    const scrollToSection = (ref) =>{
        let sectionRef;
        switch(ref){
            case 1:
                sectionRef=aboutRef;
                break;
            case 3:
                sectionRef=projectRef;
                break;
            case 4:
                sectionRef=experienceRef;
                break;
            default:
                sectionRef=aboutRef
        }
        if (sectionRef.current){
            sectionRef.current.scrollIntoView({behavior: "smooth"});
        }
        
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <div className="flex flex-row my-8 py-10">
                <div className="w-1/2 md:mx-16 mx-8">
                    <h3 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold my-3">Hi there !</h3>
                    <h3 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold my-3" >I am Willy</h3>
                    <h4 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl my-3">I am a fresh graduate from computer science faculty</h4>
                    <button 
                        className="bg-blue-500 py-2 px-4 my-8 text-xl text-white rounded-md hover:bg-blue-50 hover:text-blue-500 border-2 border-blue-500" 
                        onClick={()=> scrollToSection(aboutRef)} 
                    >
                        Contact me
                        {/* <Link  onClick={()=> scrollToSection(aboutRef)} >About me</Link> */}
                    </button>
                </div>
                <div className="w-1/2 xl:px-24 md:px-16 px-6 md:py-4 py-10 " >
                    <img src="/Images/WDprofile.JPG" alt="profile" className="lg:w-78 lg:h-80 md:w-60 md:h-60 w-32 h-32 rounded-xl border-blue-500 border-4 drop-shadow-2xl "/>
                </div>
            </div>
            <div>
                <About ref={aboutRef} id="about"/>
            </div>
            <div>
                <Experience ref={experienceRef} />
            </div>
            <div>
                <Project ref={projectRef} id="project" />
            </div>
        </>
    )
}