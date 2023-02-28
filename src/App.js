import './App.css'
import Navbar from "./components/navigationBar/NavigationBar"
import Logo from "./components/logo/Logo"
import Rank from "./components/rank/Rank"
import SubmitForm from "./components/submitForm/SubmitForm"
import ImageBox from "./components/imageBox/ImageBox"
import SignIn from "./components/signIn/SignIn"
import Register from "./components/Register/Register"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Rank />
      <SubmitForm />
      <ImageBox />
      <SignIn />
      <Register />
    </div>
  );
}

export default App;
