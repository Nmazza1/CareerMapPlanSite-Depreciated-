import { useState } from "react";

function RegionButton({clickedNorth, clickedSouth, clickedLaval, clickedMontreal, selectedRegionMap, selectedRegion}){
    return(
        <div className="bg-neutral-800 text-2xl text-slate-900 font-serif px-4 py-7">
                <p className="flex justify-center text-2xl text-slate-50 font-serif">Select Your Desired Region!</p>
                <div className="flex justify-center text-center mx-2">
                <img className="max-w-full h-auto border rounded-lg bg-white px-8"src={selectedRegionMap} alt="regionmap" useMap="#regionMap"/>

                        <map name="regionMap" id="regionMap">
                            <area alt="northshore" href="" coords="
                            10,86,92,109,82,86,112,72,172,114,221,85,298,97,362,13,389,36,405,2,443,
                            39,355,151,250,166,234,182,216,208,206,214,203,225,186,239,180,258,159,
                            266,142,287,114,301,87,295,81,278,67,275,62,259,27,257,25,246,38,242,44,
                            199,30,195,33,165,51,154,4,136"
                            shape="poly" onClick={clickedNorth} />

                            <area target="" alt="Laval" title="Laval" href="" coords="330,160,249,171
                            ,228,197,211,219,187,246,186,258,228,263,252,250,265,244,286,201,320,172" 
                            shape="poly" onClick={clickedLaval}/>
                            
                            <area target="" alt="Montreal" title="Montreal" href="" coords="354,157,350,
                            171,351,191,341,213,341,228,326,260,331,297,304,324,289,326,225,310,162,333,
                            145,314,160,301,164,278,182,263,232,271,260,251,281,229,287,207,340,159" 
                            shape="poly" onClick={clickedMontreal}/>

                            <area target="" alt="South Shore" title="South Shore" href="" coords="423,94,436,
                            104,425,125,439,148,436,161,446,173,444,187,494,219,498,243,484,267,471,269,482,
                            284,469,299,473,336,460,357,425,337,404,345,393,334,388,359,377,384,358,401,336,
                            406,287,386,266,432,216,390,203,427,176,412,156,421,150,384,195,380,218,365,234,
                            336,264,326,292,332,329,332,344,322,334,261,363,208,368,154,392,122" shape="poly" onClick={clickedSouth}/>
                        </map>
            </div>
            <p className="flex justify-center text-2xl text-slate-50 font-serif">Selected Choice: {selectedRegion}</p>
        </div>
    )
}

export default RegionButton;