import EditPageButtons from "./EditPageButtons";

function CRUDPage({buttonPress, selectedEditPress, courses,
     onFormSubmitAddCourse, onFormSubmitAddSchool,
    onFormSubmitUpdateSchool, onFormSubmitUpdateCourse,
    onFormSubmitDeleteSchool, onFormSubmitDeleteCourse}){
     
    return(
        <div className="bg-white mx-6 my-4 rounded-md px-2 pb-2">
          {/*To Add A Course or School */}
            {   buttonPress == "Add" &&
                <>
                <div>
                { selectedEditPress === "School"?

                    <>
                    School Add

                    <form onSubmit={onFormSubmitAddSchool}>
                    <input required type="text" name="schoolname" placeholder="School Name"></input>
                    <input required type="text" name="schoolimgurl" placeholder="Schools Banner Image"></input>
                    <input required type="text" name="region" placeholder="Region"></input>
                        <button type ="submit">Add School</button>
                    </form>
                    </>
                    
                    :

                    <>
                    Course Add

                    <form onSubmit={onFormSubmitAddCourse}>
                        <input required type="number" name="schoolid" placeholder="School Id"/>
                        <input required type="text" name="coursename" placeholder="Course Name"></input>
                        <input required type="text" name="courselink" placeholder="Course Link"></input>
                        <input required type="number" name="prerequisite"/>
                        <button type ="submit">Add Course</button>
                    </form>

                    </>

                }
                </div>
                </>
            }

            {/*To Add A Course or School */}
            {   buttonPress == "Update" &&
                <div>
                { selectedEditPress === "School"?

                    <>
                    School Update
                  
                     <div>
                    <form onSubmit={onFormSubmitUpdateSchool}>
                    <input required type="number" name="schoolid" placeholder="School Id"/>
                    <input required type="text" name="schoolname" placeholder="School Name"></input>
                    <input required type="text" name="schoolimgurl" placeholder="Schools Banner Image"></input>
                    <input required type="text" name="region" placeholder="Region"></input>
                    <button type ="submit">Update School</button>
                    </form>
                    </div>
                    
                    </>
                    
                    :

                    <>
                    Course Update

                    <div>
                        <form onSubmit={onFormSubmitUpdateCourse}>
                    <input required type="number" name="courseid" placeholder="Course Id"/>
                    <input required type="text" name="coursename" placeholder="Course Name"></input>
                    <input required type="text" name="courselink" placeholder="Courses Url Link"></input>
                    <input required type="number" name="prerequisite"/>
                    <button type ="submit">Update Course</button>
                    </form>
                    </div>
                    </>

                }
                </div>
            }

            {/*To Add A Course or School */}
            {   buttonPress == "Delete" &&
                <>
                <div>
                { selectedEditPress === "School"?

                    <>
                    School Delete
                    <form onSubmit={onFormSubmitDeleteSchool}>
                        <input required type="number" name="schoolid" placeholder="School ID"/>
                        <button type ="submit">Delete School</button>
                    </form>

                    </>
                    
                    :

                    <>
                    Course Delete

                    <form onSubmit={onFormSubmitDeleteCourse}>
                        <input required type="number" name="courseid" placeholder="Course ID"/>
                        <button type ="submit">Delete Course</button>
                    </form>

                    </>

                }
                </div>
                </>
            }
            
        </div>
    )
}

export default CRUDPage;