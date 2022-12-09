function Navbar(){
    return(
  
        <div className="grid grid-cols-1 grid-rows-1">
            <div className="bg-neutral-800 flex flex-none">
                <div class="flex-auto w-128 p-2">
                    <p className="text-center text-4xl text-slate-50 font-serif">Career Map Plan</p>
                </div>

                <div className="basis 1/6">
                    <button className="text-2xl text-slate-900 font-serif rounded-full border-white bg-white text-center m-2 px-6 p-1 hover:bg-sky-100">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;