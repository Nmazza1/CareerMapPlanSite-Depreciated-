
import PrereqsSection from "./components/PrereqsSection";
import bannerPhoto from './champlain2.png';
import Navbar from "./components/Navbar";
import CRUDPage from "./components/CRUDPage";
import Footer from "./components/Footer";
import { useState } from "react";
import SchoolCard from "./components/SchoolCard";
import RegionButton from "./components/RegionButton";
import PrereqsButton from "./components/PrereqsButtons";

function App() {

  const [onMain, setMainPage] = useState(true);

  const [selectedRegion, setRegionSelected] = useState(false);
  const [region, setRegion] = useState("");


  const [buttonString, setString] = useState("Edit");
  const [titleString, setTitle] = useState("Career Map Plan");

  const [tookHighMath, setHighMath] = useState(false);
  const [tookHighScience, setHighScience] = useState(false);
  const [tookPhysics, setPhysics] = useState(false);
  const [tookChemistry, setChemistry] = useState(false);


  const [selectedRegionMap, setRegionMap] = useState("https://i.ibb.co/6ZS2wCf/montreal-map.png");


  const clickedNorth = (event)=>{
    event.preventDefault();
    setRegionMap("https://i.ibb.co/NpqJx1y/regionmapgmrselected.png");
    setRegionSelected(true);
    setRegion("North Shore");
}

const clickedLaval = (event)=>{
    event.preventDefault();
    setRegionMap("https://i.ibb.co/RbKs9VP/regionmaplaval.png");
    setRegionSelected(true);
    setRegion("Laval");
}

const clickedMontreal= (event)=>{
    event.preventDefault();
    setRegionMap("https://i.ibb.co/vzsSdkG/regionmapmontreal.png");
    setRegionSelected(true);
    setRegion("Montreal");
}

const clickedSouth = (event)=>{
    event.preventDefault();
    setRegionMap("https://i.ibb.co/s2tV19c/regionmapsouthshore.png");
    setRegionSelected(true);
    setRegion("South Shore");
}


  return (
    <div className="flex flex-col min-h-screen bg-neutral-800">

      <div className="flex justify-center bg-neutral-800 flex flex-none p-4">         
         <div className="text-4xl text-slate-50 font-serif">{onMain? 'Career Map Plan' : 'School Courses Dev Page'}</div>      
      </div>
     
      <div>
      <RegionButton
      clickedNorth={clickedNorth}
      clickedLaval={clickedLaval}
      clickedSouth={clickedSouth}
      clickedMontreal={clickedMontreal}
      selectedRegionMap={selectedRegionMap}
      selectedRegion={region}/>
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
      />
      </>
    }
  
    <Footer
    onMain = {onMain}
    setMainPage = {setMainPage}/>
    </div>

  );
}

export default App;
