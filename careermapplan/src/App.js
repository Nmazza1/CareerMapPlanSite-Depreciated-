

import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import SchoolCard from "./components/SchoolCard";
import RegionButton from "./components/RegionButton";
import PrereqsButton from "./components/PrereqsButtons";
import CRUDPage from "./components/CRUDPage";
import CRUDButtons from "./components/CRUDButtons";
import axios from "axios";
import EditPageButtons from "./components/EditPageButtons";
import IntroPage from "./components/IntroPage";

function App() {

  const [onMain, setMainPage] = useState(true);

  const [selectedRegion, setRegionSelected] = useState(false);
  const [region, setRegion] = useState("");
  const [titleRegion, setTitleRegion] = useState("");
  const [prereqs, setPrereqs] = useState(0);


  const [buttonString, setString] = useState("Edit");
  const [titleString, setTitle] = useState("Career Map Plan");

  const [tookHighMath, setHighMath] = useState(false);
  const [tookHighScience, setHighScience] = useState(false);
  const [tookPhysics, setPhysics] = useState(false);
  const [tookChemistry, setChemistry] = useState(false);


  const [selectedRegionMap, setRegionMap] = useState("https://i.ibb.co/6ZS2wCf/montreal-map.png");

  const [buttonPress, setButtonPress] = useState("");

  const [selectedEditPress, setSelectedEditPress] = useState("");


  const [courses, setCourses] = useState([]);

  const clickedNorth = (event)=>{
    event.preventDefault();
    setRegionMap("https://i.ibb.co/NpqJx1y/regionmapgmrselected.png");
    setRegionSelected(true);
    setRegion("North_Shore");
    setTitleRegion("North Shore")
    console.log("Clicked North Shore");
}

const clickedLaval = (event)=>{
    event.preventDefault();
    setRegionMap("https://i.ibb.co/RbKs9VP/regionmaplaval.png");
    setRegionSelected(true);
    setRegion("Laval");
    setTitleRegion("Laval");
    console.log("Clicked Laval");
}

const clickedMontreal= (event)=>{
    event.preventDefault();
    setRegionMap("https://i.ibb.co/vzsSdkG/regionmapmontreal.png");
    setRegionSelected(true);
    setRegion("Montreal");
    setTitleRegion("Montreal");
    console.log("Clicked Montreal");
}

const clickedSouth = (event)=>{
    event.preventDefault();
    setRegionMap("https://i.ibb.co/s2tV19c/regionmapsouthshore.png");
    setRegionSelected(true);
    setRegion("South_Shore");
    setTitleRegion("South Shore");
    console.log("Clicked South Shore");
}

  const loadCoursesFromAPI = () => {
    axios
      .get('http://localhost:8081/api/courses?prereq=' +prereqs + '&region='+region)
      .then((response) => {
        if (response.status == 200) {

          const coursesData = response.data;
          setCourses(coursesData);

          console.log("Made Search with " + region + " and with a credits integer of: " + prereqs);
          console.log('http://localhost:8081/api/courses?prereq=' +prereqs + '&region='+region)
          console.log(response);
        }

      })
      .catch((error) => {
      })
  }

  const onFormSubmitAddCourse = (event) =>{
    event.preventDefault();
    console.log(event);

    const id = event.target.elements.schoolid.value;
    axios.post('http://localhost:8081/api/schools/'+id+'/courses',
        {
            courseName : event.target.elements.coursename.value,
            courseLink : event.target.elements.courselink.value,
            prerequisite : event.target.elements.prerequisite.value
        })
        .then((response)=>{
            if(response == 200)
            {
                console.log("Added Course");
            }
        })
        .catch((error)=>{
          console.log("Not Successful");
          console.log(error)
        })

    

    console.log("Clicked");
  }


  const onFormSubmitUpdateCourse =(event) =>{
   event.preventDefault();

    axios.put('http://localhost:8081/api/courses/'+event.target.elements.courseid.value, {
                courseName : event.target.elements.coursename.value,
                courseLink : event.target.elements.courselink.value,
                prerequisite : event.target.elements.prerequisite.value
            })
            .then((response)=>{
              console.log("Updated Course");
            })
            .catch((error)=>{
              console.log("Not Successful");
              console.log(error)
            })
  }

  const onFormSubmitDeleteCourse = (event) =>{
    event.preventDefault();

    axios.delete('http://localhost:8081/api/courses/'+event.target.elements.courseid.value,)
        .then((response)=>{
          console.log("Deleted Course");
        })
        .catch((error)=>{
          console.log("Not Successful on deleting Course");
            console.log(error);
        })
   
  }

  const onFormSubmitAddSchool = (event) =>{
    event.preventDefault();
    console.log(event);

    axios.post('http://localhost:8081/api/schools',
        {
            schoolName : event.target.elements.schoolname.value,
            schoolImgUrl : event.target.elements.schoolimgurl.value,
            region : event.target.elements.region.value
        })
        .then((response)=>{
            if(response == 200)
            {
                console.log("Added School");
            }
        })
        .catch((error)=>{
          console.log("Not Successful on adding a School");
          console.log(error)
        })

    

    console.log("Clicked");
  }

  const onFormSubmitUpdateSchool = (event) => {
    event.preventDefault();
   
    axios.put('http://localhost:8081/api/schools/'+event.target.elements.schoolid.value, {
                schoolName : event.target.elements.schoolname.value,
                schoolImgUrl: event.target.elements.schoolimgurl.value,
                region : event.target.elements.region.value
            })
            .then((response)=>{
              console.log("Updated School");
            })
            .catch((error)=>{
              console.log("Not Successful on updating School");
              console.log(error)
            })
  }

  const onFormSubmitDeleteSchool = (event) =>{
    event.preventDefault();

    axios.delete('http://localhost:8081/api/schools/'+event.target.elements.schoolid.value,)
        .then((response)=>{
          console.log("Deleted School");
        })
        .catch((error)=>{
          console.log("Not Successful on deleting School");
            console.log(error);
        })
  }

  useEffect(()=>{
    console.log("Promise is being made")
    loadCoursesFromAPI();
  }, [region, tookHighMath, tookHighScience, tookPhysics, tookChemistry])

  
  
  return (
    <div>

    {/*
    <div className="bg-neutral-800">
      <div className="flex flex-col min-h-screen">

      <div className="flex justify-center bg-neutral-800 flex flex-none p-4">         
         <div className="text-4xl text-slate-50 font-serif">{onMain? 'Career Map Plan' : 'School Courses Dev Page'}</div>      
      </div>

    {
      onMain &&
      <>
          <div>
        <RegionButton
        clickedNorth={clickedNorth}
        clickedLaval={clickedLaval}
        clickedSouth={clickedSouth}
        clickedMontreal={clickedMontreal}
        selectedRegionMap={selectedRegionMap}
        selectedRegion={titleRegion}/>
        </div>

      {
        selectedRegion &&

        <>
        <PrereqsButton
      tookHighMath={tookHighMath}
      setHighMath={setHighMath}

      tookHighScience={tookHighScience}
      setHighScience={setHighScience}

      tookPhysics={tookPhysics}
      setPhysics={setPhysics}

      tookChemistry={tookChemistry}
      setChemistry={setChemistry}
      prereqs = {prereqs}
      setPrereqs = {setPrereqs}
      />

      <div className="grid grid-cols-4 gap-4 bg-white mx-6 my-4 rounded-md px-2 pb-2">
        
      {
        courses.map((item)=> <SchoolCard
        item={item}/>)
      }
      </div>      

      </>
      }
      
  
      </>

    }

    {
      !onMain &&
      <>
        <CRUDButtons
        buttonPress={buttonPress}
        setButtonPress={setButtonPress}/>
        <EditPageButtons
        setSelectedEditPress={setSelectedEditPress}
        selectedEditPress= {selectedEditPress}
        />

        <CRUDPage
        buttonPress={buttonPress}
        selectedEditPress={selectedEditPress}
        courses = {courses}
        onFormSubmitAddCourse={onFormSubmitAddCourse}
        onFormSubmitUpdateCourse={onFormSubmitUpdateCourse}
        onFormSubmitDeleteCourse={onFormSubmitDeleteCourse}
        onFormSubmitAddSchool ={onFormSubmitAddSchool}
        onFormSubmitUpdateSchool = {onFormSubmitUpdateSchool}
        onFormSubmitDeleteSchool = {onFormSubmitDeleteSchool}/>

      </>
    }
  
    <Footer
    onMain = {onMain}
    setMainPage = {setMainPage}/>

      </div>
    </div>
  *
 
  */}
  <IntroPage/>
  </div>

  );
}

export default App;
