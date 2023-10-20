import CV_fr from './CV_fr.pdf'
export const Resume = () =>{
    return(
        <div className="md:mx-16 mx-8 my-6" > 
            <h3 className="text-xl" >Resume</h3>
            <a href={CV_fr} >
                <button className="bg-blue-400 rounded-md my-2 p-2 text-white font-bold ">Download</button>
            </a>
        </div>
    )
}