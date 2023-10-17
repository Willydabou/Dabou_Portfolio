import { useState } from 'react';
//import { Link } from 'react-router-dom';
import { FaBars} from 'react-icons/fa';
//import myLogo from '/Images/WD.png'


export const Navbar = ({scrollToSection}) =>{

    const Links = [
        {name:"About", link:1},
        // {name:"Education",link:2},
        {name:"Project", link:3},
        {name:"Experiences", link:4},
        {name:"Contact", link:5},
        
    ]

    const [open,setOpen] = useState(false);
    return (
        <>
            <nav className="flex items-center justify-between bg-blue-400 p-4">
                
                <div className="flex items-center ml-4 cursor-pointer">
                    <img src="/Images/WillyDabou.jpg" alt="Logo" className="md:h-10 h-14 md:w-10 w-14 mr-2"/>
                    <span className="text-white text-lg font-bold">
                        {/* <Link to="/">WillyDabou</Link> */}
                        WillyDabou
                    </span>
                </div>
                
                <div className="flex-grow"></div>

                <div onClick={()=>setOpen(!open)} className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden">
                    <FaBars className={` ${open? "hidden": "" } `}/>
                    <span className={` ${open? "": "hidden" } `}>X</span>
                </div>
                <div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-8 md:pr-0 pr-8 ${open? "": "hidden" } `}>
                        {
                            Links.map((links)=>(
                                <li onClick={()=>scrollToSection(`${links.link}`)}
                                 className="text-white hover:text-gray-300 md:mr-10 text-xl md:my-0 my-4 cursor-pointer">
                                    {links.name}
                                </li> 
                            ))
                        }
                        
                    </ul>
                </div>
                
            </nav>
        </>
    )
}