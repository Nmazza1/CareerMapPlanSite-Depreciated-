import { useState } from "react";
import SchoolCard from "./SchoolCard";

function PrereqsSection(){

        const [tookHighMath, setHighMath] = useState(false);
        const [tookHighScience, setHighScience] = useState(false);
        const [tookPhysics, setPhysics] = useState(false);
        const [tookChemistry, setChemistry] = useState(false);

        const initialCourses =[
            {id: 1, school: 'Champlain', courseName: 'Comp Sci'},
            {id: 2, school: 'Champlain', courseName: 'Health'}
        ]

        const [courses, setCourses] = useState(initialCourses)

    return(
        <div className="bg-gradient-to-t from-neutral-500 to-neutral-800 pt-12">
        
        <div className="grid grid-cols-2 grid-rows-1">

            <div className="col-start-1">
                <p className="text-center text-lg text-slate-200 font-serif py-2">Fill out Prerequisites and Choices</p>
            </div>
        </div>


        <div className="grid grid-cols-8 py-2 min-h-screen">
            
            <div className="col-start-1 col-end-4 col-span-2 pl-14 ">
                <ul className="text-lg text-slate-200 font-serif">
                    <span className="flex">

                        <li className="flex-none">Did you take High Math?</li>
                        <span className="flex-auto">
                            <span className="grid grid-cols-1 place-items-end pr-8">
                                <input type="checkbox" onChange={()=>{
                                    setHighMath(!tookHighMath);
                                }} ></input>
                            </span>
                        </span><br/>

                    </span>

                    <span className="flex">
                        <li className="flex-none">Did you take High Science?</li>
                        <span className="flex-auto">
                            <span className="grid grid-cols-1 place-items-end pr-8">
                                <input type="checkbox" onChange={()=>{
                                    setHighScience(!tookHighScience);
                                }} ></input>
                            </span>
                        </span><br/>
                    </span>

                    <span className="flex">
                        <li className="flex-none">Did you take Physics?</li>
                        <span className="flex-auto">
                            <span className="grid grid-cols-1 place-items-end pr-8">
                                <input type="checkbox"onChange={()=>{
                                    setPhysics(!tookPhysics);
                                }} ></input>
                            </span>
                        </span><br/>
                    </span>

                    <span className="flex">
                        <li className="flex-none">Did you take Chemistry?</li>
                        <span className="flex-auto">
                            <span className="grid grid-cols-1 place-items-end pr-8">
                                <input type="checkbox"onChange={()=>{
                                    setChemistry(!tookChemistry);
                                }} ></input>
                            </span>
                        </span><br/>
                    </span>
                    
                    <span className="flex">
                        <li className="flex-none pr-2">Region:</li>
                        <span className="flex-auto">
                            <span className="grid grid-cols-1 place-items-end pr-8">
                            <select id="region" name="region" className="flex-auto border border-solid rounded-full text-slate-900">
                                <option value="southShore" className="text-sm">South Shore</option>
                                <option value="montrealIsland" className="text-sm">Montreal Island</option>
                                <option value="greaterMontreal" className="text-sm">Greater Montreal Region</option>
                        </select>
                            </span>
                        </span><br/>

                    </span>
                </ul>
            </div>


            <div className="col-start-4 col-span-5 border border-solid border mx-4 rounded-lg p-4 list-none">
                
                    {courses.map((item)=>{
                        return <div className="mb-4"><SchoolCard
                        course = {item}/></div>
                    })}
                
            </div>  


        </div>

        </div>
    )
}

export default PrereqsSection;