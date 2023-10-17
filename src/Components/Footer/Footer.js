import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"


export const Footer = () =>{
    return (
        <>
            <div className="bg-gray-600 text-center items-center py-4" >
                <ul className="flex place-content-center mb-4 py-4 px-auto space-x-10" >
                    <li><FaLinkedin className="md:w-10 md:h-10 w-7 h-7  text-blue-700 cursor-pointer"/></li>
                    <li><FaGithub className="md:w-10 md:h-10 w-7 h-7  text-white cursor-pointer" /></li>
                    <li><FaFacebook className="md:w-10 md:h-10 w-7 h-7  text-blue-800 cursor-pointer" /> </li>
                    <li><FaInstagram className="md:w-10 md:h-10 w-7 h-7 text-red-500 cursor-pointer" /></li>
                    <li><FaTwitter className="md:w-10 md:h-10 w-7 h-7  text-blue-700 cursor-pointer" /></li>
                </ul>
                <div>&copy; copyright 2023</div>
            </div>
        </>
    )
}