import { useState } from "react";
function EditPageButtons({setSelectedEditPress, selectedEditPress}){

    const [clickedButton, setClickedButton] = useState(false);
    return(
        <div className="text-slate-900 text-2xl text-slate-900 font-serif px-4">
            <div className="flex text-center">
                <div className= {(clickedButton && selectedEditPress === "School")? 
                'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500 '
                : 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100' } 
                onClick={()=>{
                        setSelectedEditPress("School");
                        setClickedButton(true);
                    }}>
                    <p>School</p>
                </div>

                <div className= {(clickedButton && selectedEditPress === "Courses")? 
                'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500 '
                : 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100' } 
                onClick={()=>{
                    setSelectedEditPress("Courses");
                        setClickedButton(true);
                 }}>
                    <p>Course</p>
                </div>

            </div>
        </div>
    )
}

export default EditPageButtons;