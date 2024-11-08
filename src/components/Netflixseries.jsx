import seriesData from "../api/seriesData.json";
import SeriesCard  from "./SeriesCard";
const Netflixseries = () =>{
   return (
    <ul className="grid grid-three--cols">
        {seriesData.map((curElem) =>{
         return <SeriesCard  key={curElem.id} data={curElem}/>
        })}

      </ul>
   );
};


export default Netflixseries




