import React, { useState } from "react"
import Navbar from "./components/navigationBar/NavigationBar"
import Logo from "./components/logo/Logo"
import Rank from "./components/rank/Rank"
import SubmitForm from "./components/submitForm/SubmitForm"
import ImageBox from "./components/imageBox/ImageBox"
import SignIn from "./components/signIn/SignIn"
import Register from "./components/Register/Register"
import "./App.css"
import ParticlesBg from 'particles-bg'


///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '8da79a41225749c8a701716f477a2391';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'a363z';
const APP_ID = 'face-recognition-zoho';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';



function App() {
  const [userSignedIn, setUserSignedIn] = useState(false)
  const [userIntention, setUserIntention] = useState("signin")
  const [userInput, setUserInput] = useState("")


  ///////////////////////////////////////////////////////////////////////////////////
  // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
  ///////////////////////////////////////////////////////////////////////////////////

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": userInput
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id


  const login = (log, user) => {
    setUserSignedIn(log)
    setUserIntention(user)
  }

  const onInputChange = (e) => {
    setUserInput(e.target.value)
  }

  const onSubmit = () => {
    console.log(userInput);

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }


  return (
    <div className='App'>
      <div className='headerContainer'>
        <Logo />
        <Navbar userSignedIn={userSignedIn} login={login} />
      </div>
      {
        userSignedIn
          ? <>
            <Rank />
            <SubmitForm onInputChange={onInputChange} onSubmit={onSubmit} />
            <ImageBox imageURL={userInput} />
          </>
          : <>
            {userIntention === "signin"
              ? <SignIn login={login} />
              : <Register login={login} />
            }
          </>
      }


      {/* Replace type with these to change BG 
      "color" "ball" "lines" "thick" "circle" "cobweb" "polygon" "square" "tadpole" "fountain" "random" "custom" */}
      <ParticlesBg color="#ffffff" num={500} type="cobweb" bg={true} />
    </div>
  );
}

export default App;
