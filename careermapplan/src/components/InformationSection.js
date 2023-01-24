import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

function InformationSection({selectedPath, setSelectedPath, selectedCountry, setCountry,
     selectedRegion, setRegionSelected}){
    return(
        <div className="font-serif text-center text-2xl min-h-screen">
            
                <div>
                    <div className="flex flex-row justify-center gap-4 pt-8">
                    <p className="">Where are you going?</p>
                    <FontAwesomeIcon icon={faSchool} className="fa-xl" />
                    </div>

                    <div className="flex flex row justify-center gap-12  py-8">
                        <div className={selectedPath >= 1? "rounded-lg border-4 p-8 w-1/4 border-green-500 hover:border-green-500 " :
                         "rounded-lg border-4 p-8 hover:border-green-500 w-1/4"}
                        onClick={()=>{
                            setSelectedPath(1);
                        }}>
                            College
                        </div>

                        <div className="rounded-lg border-4 p-8 w-1/4 border-rose-500"
                        onClick={()=>{
                            
                        }}>
                            University 
                        </div>
                    </div>
                
                    
                    {
                        selectedPath > 0 &&
                        <div>
                            <div className="flex flex-row justify-center gap-4">
                            <p>Choose Your Country</p>
                            <FontAwesomeIcon icon={faEarthAmericas} className="fa-xl"/>
                            </div>
                        <div className="flex flex-row justify-center  pt-8 pb-16 gap-12">
                            <div className={selectedCountry == "Canada"?
                             "rounded-lg border-4 p-8 border-green-500 hover:border-green-500 " :
                         "rounded-lg border-4 p-8 hover:border-green-500"}
                            onClick={()=>{
                                setCountry("Canada");
                                setSelectedPath(2);
                            }}>
                                Canada
                            </div>
                            <div className="rounded-lg border-4 p-8 border-rose-500">
                                America
                            </div>
                        </div>
                        </div>
                    }
                    {
                        selectedPath > 1 &&
                        <div>
                            {
                                selectedCountry == "Canada" &&
                                <div className="flex justify-center">
                                    <div className="rounded-lg border-4 p-8 border-green-500">
                                        <form>
                                            <label for="cars">Choose a Province:</label>
                                            <select id="" name="cars">
                                        {
                                        //  <option value="alberta">Alberta</option>
                                        //  <option value="britishcolumbia">British Columbia</option>
                                        // <option value="pei">Prince Edward Island</option>
                                            //<option value="manitoba">Manitoba</option>
                                            //<option value="newbrunswick">New Brunswick</option>
                                            //<option value="newfoundland">Newfoundland and Labrador</option>
                                            //<option value="novascotia">Nova Scotia</option>
                                            <option value="quebec">Quebec</option>
                                            //<option value="saskatchewan">Saskatchewan</option>
                                            //<option value="ontario">Ontario</option>
                                            
                                        }  
                                            </select>
                                            <button className="mx-4 px-2 rounded-lg border-4">Next</button>
                                        </form>
                                    </div>
                                    
                                </div>
                            }
                            {
                                selectedCountry == "America" &&
                                <div>

                                </div>
                            }


                        </div>
                    }
                

                </div>
                
            
        </div>
            
    )
}

export default InformationSection;