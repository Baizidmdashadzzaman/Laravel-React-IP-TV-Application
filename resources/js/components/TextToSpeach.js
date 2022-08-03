import React, { useState ,useEffect} from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function TextToSpeach() {
  const [value, setValue] = useState("Hi my name is asad zaman. visit my site at baizidmdashadzzaman-next.vercel.app. Also visit my github at github.com/Baizidmdashadzzaman");
  const { speak , cancel} = useSpeechSynthesis();
  
  return (
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header"><b>Text to speach</b></div>
                <div className="card-body">
                    <p>This is text to speach component</p>
                   
    <div className="speech">

      <div className="group">
        <textarea
          rows="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="group">
        <button className="btn btn-block btn-primary " onClick={() => speak({ text: value })}>
          Speech
        </button>
        <button className="btn btn-block btn-danger " onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
                </div>
            </div>
        </div>
    </div>
    <br/><br/><br/>
    </div>
  )
}

export default TextToSpeach