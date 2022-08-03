import React from 'react'

function Home() {
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header"><b>Home page</b></div>
                <div className="card-body">
                    <p>This is home component</p>
                   
                    <center>
                       <p><img src='/radio.gif' alt="image" style={{width:'500px'}}/></p>
                    </center>
                </div>
            </div>
        </div>
    </div>
    <br/><br/>
    </div>
  )
}

export default Home