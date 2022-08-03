import React ,{ useRef ,useState ,useEffect} from 'react';
import { useParams ,NavLink } from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";

import { RadioBrowserApi } from 'radio-browser-api'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Search() {


  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");




  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      console.log(data);
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi("My Radio App");

    const stations = await api
    
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 30,
      })
      .then((data) => {
        return data;
      });

    return stations;
  };

  const setDefaultSrc = (event) => {
    event.target.src = "/radio.gif";
  };

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];



  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header"><b>Radio page</b></div>
                <div className="card-body">
                    <p>This is radio component .</p>
                    <br/>
                    <p>
                    
                    {filters.map((filter) => (
                      <><button className={stationFilter === filter ? "btn btn-sm btn-primary pb-10 selected" : "btn btn-sm btn-primary pb-10"}
                      onClick={() => setStationFilter(filter)} >{filter}</button> &nbsp;&nbsp;</>
                    ))
                    } 
                      </p>

                </div>
            </div>


<section style={{backgroundColor: '#eee'}}>
  <div className="container py-5">
    
    <div className="row stations " >
    {stations && stations.map((station, index) => {
      return (
      <div className="col-md-12 col-lg-4 mb-4 mb-lg-0 station " key={index} style={{paddingBottom:'5px'}}>
        <div className="card text-black">
             <img
                    className="card-img-top"
                    src={station.favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                    style={{width:'211px',height:'158px'}}
              />
          <div className="card-body">
            <div className="text-center mt-1">
              <h5 className="card-title">{station.name}</h5>
              <h6 className="text-primary mb-1 pb-3"></h6>
            </div>
            
            <div className="d-flex flex-row">
              <div  className="flex-fill me-1" data-mdb-ripple-color="dark">
              <AudioPlayer
                  className="player"
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
   );
  })}

    </div>





  </div>
</section>




        </div>
    </div>
    <br/><br/><br/><br/>
    </div>
  )
}

export default Search