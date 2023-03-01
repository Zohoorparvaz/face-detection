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


function App() {
  const [userSignedIn, setUserSignedIn] = useState(false)
  const [userIntention, setUserIntention] = useState("signin")
  const [userInput, setUserInput] = useState("")
  const login = (log, user) => {
    setUserSignedIn(log)
    setUserIntention(user)
  }

  const onInputChange = (e) => {
    setUserInput(e.target.value)
  }

  const onSubmit = () => {
    console.log(userInput);
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
