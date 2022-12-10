function Footer({onMain, setMainPage}){
    return(
        <div className="flex justify-between border-t-1 bg-neutral-800 p-4 text-sm font-serif italic text-slate-200 mt-auto">
            <div className="text-left pl-12">
                <p>Have any questions or suggestions?<br/>
                    Feel free to contact us with them!
                    Support Email: example@email.com <br/>
                    Phone Number: 555-555-5555 <br/>
                    Developed by M3
                </p>

                
            </div>

            <div className="px-8">
            <button className="text-2xl text-slate-900 font-serif rounded-full
             border-white bg-white text-center m-2 px-6 p-1 hover:bg-sky-100" onClick={()=>{
                setMainPage(!onMain);

             }}>{onMain ? 'Edit' : 'Back to Main'}</button>
            </div>          
        </div>
        
    );
}

export default Footer;