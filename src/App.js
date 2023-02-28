import './App.css'
import Navbar from "./components/navigationBar/NavigationBar"
import Logo from "./components/logo/Logo"
import Rank from "./components/rank/Rank"
import SubmitForm from "./components/submitForm/SubmitForm"
import ImageBox from "./components/imageBox/ImageBox"
import SignIn from "./components/signIn/SignIn"
import Register from "./components/Register/Register"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className='headerContainer'>
        <Logo />
        <Navbar />
      </div>
      <Rank />
      <SubmitForm />
      <ImageBox />
      <SignIn />
      <Register />
    </div>
  );
}

export default App;
