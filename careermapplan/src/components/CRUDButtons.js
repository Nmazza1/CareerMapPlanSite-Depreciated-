import { useState } from "react";

function CRUDButtons({buttonPress, setButtonPress}){
const [clickedButton, setClickedButton] = useState(false);
    
    return(
        
        <>
        <div className="flex text-center mx-4">
            <div className={(clickedButton && buttonPress === "Add" )? 'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500 ' :
                 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100'} onClick={()=>{
                    setButtonPress("Add");
                    setClickedButton(true);
                    
                 }}>
                Add
            </div>

            <div className={(clickedButton && buttonPress === "Update") ? 'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500 ' :
                 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100'} onClick={()=>{
                    setButtonPress("Update");
                    setClickedButton(true);
                 }}>
                Update
            </div>

            <div className={(clickedButton && buttonPress === "Delete" )? 'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500 ' :
                 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100'} onClick={()=>{
                    setButtonPress("Delete");
                    setClickedButton(true);
                 }}>
                Delete
            </div>

        </div>
        </>
    )
}

export default CRUDButtons;