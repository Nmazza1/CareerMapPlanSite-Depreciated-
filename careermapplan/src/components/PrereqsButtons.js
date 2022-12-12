function PrereqsButton({tookHighMath, setHighMath, tookHighScience, setHighScience, tookChemistry, setChemistry, tookPhysics, setPhysics}){
    return(
        <div className="bg-neutral-800 text-slate-900 text-2xl text-slate-900 font-serif px-4">
          <p className="text-center text-slate-50 font-serif">Choose Your Prerequisites!</p>
            <div className="flex text-center">
                <div className={tookHighMath ? 'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500 ' :
                 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100'} onClick={()=>{setHighMath(!tookHighMath)}}>
                    <p>High Math</p>
                </div>

                <div className={tookHighScience ? 'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500' :
                 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100'} onClick={()=>{setHighScience(!tookHighScience)}}>
                    <p>High Science</p>
                </div>

                <div className={tookChemistry ? 'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500' :
                 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100'} onClick={()=>{setChemistry(!tookChemistry)}}>
                    <p>Chemistry</p>
                </div>

                <div className={tookPhysics ? 'border outline-2 border-black rounded min-h-min p-4 m-2 grow bg-green-500' :
                 'border outline-2 rounded min-h-min p-4 m-2 grow bg-white hover:bg-sky-100'} onClick={()=>{setPhysics(!tookPhysics)}}>
                    <p>Physics</p>
                </div>
            </div>
        </div>
    )
}

export default PrereqsButton;