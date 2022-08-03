import React ,{ useRef ,useState ,useEffect} from 'react';
import ReactPlayer from 'react-player'
import { useParams ,NavLink } from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";

import Swal from 'sweetalert2'

function Tv() {
  const [tvchannelname, settvchannelname] = useState("");
  const [tvchannelurl, settvchannelurl] = useState("");

  const [allchannel, setallchannel] = useState([]);

  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");
  const [stationscount, setStationsCount] = useState(60);
  const [stationtype, setStationsType] = useState(1);
  const [iptvstation, setIPTVStation] = useState();
  const [alldata, setalldata] = useState([]);
  const [alldataAll, setalldataAll] = useState([]);

  const [tvname, settvname] = useState("AlJazeera English");
  const [tvlink, settvlink] = useState("https://live-hls-web-aje.getaj.net/AJE/index.m3u8");

  const [mutevideo, setmutevideo] = useState(true);
  const [playvideo, setplayvideo] = useState(true);

  useEffect(() => {
    fetchData();
    setTimeout(() => {setmutevideo(false)}, 2000);
    setTimeout(() => {setplayvideo(true)}, 3000);
  }, []);

  let fetchData = async (pageNumber = 1) => {
   axios
   .get(`/api/stream?page=${pageNumber}`)
   .then((response) => {
     setalldata(response.data.allData.data);
     setalldataAll(response.data.allData);
   })
   .catch((error) => {
     console.error(error);
   });


 };
 let changeStationTv=(name,link)=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    text: 'Playing now : '+name,
    showConfirmButton: false,
    timer: 1500
  })
  settvname(name);
  settvlink(link);
  console.log(name);
  console.log(link);
}

  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header"><b>IP TV page</b></div>
                <div className="card-body">
                    <center>
                    <ReactPlayer muted={mutevideo} playing={playvideo} width="100%" height="500px" controls={true} url={tvlink} />
                    </center>
                    <hr/>
                    <h3>Channel : <b>{tvname}</b></h3>
                </div>
                <hr/>
               <table class="table table-hover">
                 <thead>
                   <tr>
                     <th scope="col">SL</th>
                     <th scope="col">Channel</th>
                     {/* <th scope="col">Url</th> */}
                     <th scope="col">Status</th>
                     <th scope="col">Play</th>
                   </tr>
                 </thead>
                 <tbody>
                 { alldata.map((singledata) => ( 
                   <tr key={singledata.id}>
                     <th scope="row">{singledata.id}</th>
                     <td>{singledata.channel}</td>
                     {/* <td>{singledata.url}</td> */}
                     <td>{singledata.status}</td>
                     <td><a href="javascript:void(0)" onClick={()=>{changeStationTv(singledata.channel,singledata.url)}} 
                     className="btn btn-primary" >Play</a></td>
                   </tr>
                 ))}
                 </tbody>
                 
               </table>
               <Pagination
                                    activePage={alldataAll?.current_page ? alldataAll?.current_page : 0}
                                    itemsCountPerPage={alldataAll?.per_page ? alldataAll?.per_page : 0 }
                                    totalItemsCount={alldataAll?.total ? alldataAll?.total : 0}
                                    onChange={(pageNumber) => {
                                        fetchData(pageNumber)
                                    }}
                                    pageRangeDisplayed={8}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    firstPageText="First"
                                    lastPageText="Last"
                                    height="10px"
                                />
            </div>
        </div>
    </div>
    <br/><br/>
    </div>
  )
}

export default Tv