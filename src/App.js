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
  const [faceBox, setFaceBox] = useState({})
  const [user, setUser] = useState({})


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

  const login = (email, pass) => {
    fetch("http://localhost:8081/signin", {
      method: 'POST',
      headers: {
        "Content-Type": "Application/Json"
      },
      body: JSON.stringify({
        email: email,
        password: pass
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.name === "Alireza") {
          setUserSignedIn(true)
          setUser(data);
        }
      })
  }

  const logout = () => {
    setUserSignedIn(false)
  }

  const setIntent = (int) => {
    logout();
    setUserIntention(int)
  }

  const onInputChange = (e) => {
    setUserInput(e.target.value)
  }

  const register = async (name, email, pass) => {
    let found = false;
    await fetch("http://localhost:8081/")
      .then(res => res.json())
      .then(data => {
        data.forEach(user => {
          if (user.email === email) {
            found = true
          }
        });
        if (found) {
          console.log("User already in database")
        } else {
          fetch("http://localhost:8081/register", {
            method: 'POST',
            headers: {
              "Content-Type": "Application/Json"
            },
            body: JSON.stringify({
              name: name,
              email: email,
              password: pass
            })
          })
            .then(res => res.json())
            .then(data => console.log(data))
        }
      })
  }

  const findFaceNodes = (data) => {
    const nodes = data.outputs[0].data.regions[0].region_info.bounding_box;
    const photo = document.getElementById("face");
    const width = Number(photo.width);
    const height = Number(photo.height);
    const calculatedBox =
    {
      leftCol: nodes.left_col * width,
      topRow: nodes.top_row * height,
      rightCol: width - (nodes.right_col * width),
      bottomRow: height - (nodes.bottom_row * height)
    };
    //    inset: 79.9315px  247.886px 371.637px 22.4526px
    //    inset: 579px      522px     79px      522px

    setFaceBox(calculatedBox)
  }

  const onSubmit = () => {
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(result => { findFaceNodes(result) })
      .catch(error => console.log('error', error));
  }

  return (
    <div className='App' >
      <div className='headerContainer'>
        <Logo />
        <Navbar logout={logout} userSignedIn={userSignedIn} setIntent={setIntent} />
      </div>
      {
        userSignedIn
          ? <>
            <Rank user={user} />
            <SubmitForm onInputChange={onInputChange} onSubmit={onSubmit} />
            <ImageBox imageURL={userInput} box={faceBox} />
          </>
          : <>
            {userIntention === "signin"
              ? <SignIn login={login} />
              : <Register register={register} />
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


