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
  return (
    <div className='App'>
      <div className='headerContainer'>
        <Logo />
        <Navbar />
      </div>
      <Rank />
      <SubmitForm />
      <ImageBox />
      <SignIn />
      <Register />
      {/* Replace type with these to change BG 
      "color" "ball" "lines" "thick" "circle" "cobweb" "polygon" "square" "tadpole" "fountain" "random" "custom"*/}
      <ParticlesBg color="#ffffff" num={10} type="cobweb" bg={true} />
    </div>
  );
}

export default App;
