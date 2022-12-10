function SchoolCard({schoolName, course, courseLink, schoolImgCard}){

    return(
        <>
        <div className="border-2 border-black rounded-md mt-2 shadow-2xl bg-neutral-900">
            <img src={schoolImgCard} className="flex-auto rounded-md"/>
            <div className="min-h-fill pl-2">
            <p className="text-slate-50 font-serif">{schoolName}</p>
            <p className="text-slate-50 font-serif">{course}</p>      
                    <a className="border outline-2 rounded min-h-min grow bg-white my-2 px-2 mb hover:bg-sky-100" href={courseLink}>Visit Course</a>
            </div>
        </div>
        </>
    )
}

export default SchoolCard;