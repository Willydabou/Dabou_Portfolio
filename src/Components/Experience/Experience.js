import React from "react"
import { FaDev, FaBuilding, FaDatabase } from "react-icons/fa"

export  const Experience = React.forwardRef((props, ref) =>{
    return (
        <div ref={ref} className="bg-gradient-to-r from-slate-300 to-blue-500 py-2" >
            <div className="md:mx-16 mx-8">
                <h3 className="text-2xl font-bold">My work experience</h3>
                <div className="grid md:grid-cols-2 space-x-2">

                    <div className="my-8 bg-slate-100 border-2 drop-shadow-xl rounded-lg p-4">
                        <div className="flex flex-row">
                            <FaDatabase className="w-10 h-10 bg-blue-500 text-slate-50"/>
                            <span className="font-bold text-xl mx-2 my-2">Data visualization Internship</span>
                        </div>
                        <div className="flex flex-row">
                            <div className="ml-12 md:mr-6 mr-3 space-y-2">
                                <p className="font-bold text-blue-500 text-md">Exelerate with Saint Luis University</p>
                                <p className="">June 2023 - July 2023</p>
                                <p>Analyse and visualize data that will be used in the marketing departement for decision making</p>
                            </div>
                            <div className="flex flex-col">
                                <img src="/Images/Excelerate.jpg" className="w-17 md:h-14 h-11" />
                                <img src="/Images/SaintLuis.png" className="w-17 md:h-14 h-11 my-2"/>
                            </div>
                        </div>
                    </div>

                    <div className="my-8 bg-slate-100 border-2 drop-shadow-xl rounded-lg p-4">
                        <div className="flex flex-row">
                            <FaDatabase className="w-10 h-10 bg-blue-500 text-slate-50" />
                            <span className="font-bold text-xl mx-2 my-2">Data Cleaning</span>
                        </div>
                        <div className="flex flex-row">
                            <div className="ml-12 md:mr-6 mr-3 space-y-2">
                                <p className="font-bold text-blue-500 text-md">Nagy research</p>
                                <p>february 2023 - April 2023</p>
                                <p>Clean a data then classify by cathegory using Excel</p>
                            </div>
                            <div className="">
                                <img src="/Images/Nagy.jpg" className="w-24 md:h-24 h-20" />
                            </div>
                        </div>
                    </div>

                    <div className="my-8 bg-slate-100 border-2 drop-shadow-xl rounded-lg p-4">
                        <div className="flex flex-row">
                            <FaBuilding className="w-10 h-10 bg-blue-500 text-slate-50"/>
                            <span className=" font-bold text-xl mx-2 my-2">Customer service</span>
                        </div>
                        <div className="flex flex-row">
                            <div className="ml-12 md:mr-6 mr-3 space-y-2">
                                <p className="font-bold text-blue-500 text-md">Concentrix (Expedia)</p>
                                <p>September 2022 - November 2022</p>
                                <p>Handling customer request for hotel booking.</p>
                            </div>
                            <div className="">
                                <img src="/Images/Cnx.png" className="w-24 md:h-24 h-20" />
                            </div>
                        </div>   
                    </div>


                    <div className=" my-8 bg-slate-100 border-2 drop-shadow-xl rounded-lg p-4">
                        <div className="flex flex-row">
                            <FaDev className="w-10 h-10 bg-blue-500 text-slate-50"/>
                            <span className=" font-bold text-xl mx-2 my-2">Web development internship</span>
                        </div>
                        <div className="flex flex-row">
                            <div className="ml-12 md:mr-6 mr-3 space-y-2">
                                <p className="font-bold text-blue-500 text-md">DNA Webhostig</p>
                                <p>july 2022 - september 2022</p>
                                <p>Developing responsive web app using React js and Tailwind Css.</p>
                            </div>
                            <div className="">
                                <img src="/Images/DNA.jpg" className="w-20 md:h-20 h-16" />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
});