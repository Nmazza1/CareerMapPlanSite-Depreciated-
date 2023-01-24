

import { useEffect, useState } from "react";
import axios from "axios";
import IntroPage from "./components/IntroPage";
import InformationSection from './components/InformationSection';

function App() {


  const [selectedRegion, setRegionSelected] = useState(false);
  const [selectedPath, setSelectedPath] = useState(0);
  const [selectedCountry, setCountry] = useState("");
  

  const [region, setRegion] = useState("");
  const [titleRegion, setTitleRegion] = useState("");
  const [prereqs, setPrereqs] = useState(0);

  const [tookHighMath, setHighMath] = useState(false);
  const [tookHighScience, setHighScience] = useState(false);
  const [tookPhysics, setPhysics] = useState(false);
  const [tookChemistry, setChemistry] = useState(false);


  const [selectedRegionMap, setRegionMap] = useState("https://i.ibb.co/6ZS2wCf/montreal-map.png");

  const [courses, setCourses] = useState([]);


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

  useEffect(()=>{
    console.log("Promise is being made")
    loadCoursesFromAPI();
  }, [region, tookHighMath, tookHighScience, tookPhysics, tookChemistry])

  
  
  return (
    <html>
      <head>

        <script src="https://kit.fontawesome.com/7302fb4d2e.js" crossorigin="anonymous"></script>
      </head>
      <div>
      <IntroPage/>
      <InformationSection
      selectedPath = {selectedPath}
      setSelectedPath = {setSelectedPath}
      selectedCountry = {selectedCountry}
      setCountry = {setCountry}
      selectedRegion ={selectedRegion}
      setRegionSelected = {setRegionSelected}/>

  </div>

  </html>

  );
}

export default App;
