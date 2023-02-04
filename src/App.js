import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeView from "./containers/WelcomeView/WelcomeView";
import MyNavbar from "./components/Navbar/Navbar";
import MainGame from "./containers/MainGame/MainGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar></MyNavbar>
        <Routes>
          <Route path="/" element={<WelcomeView />}></Route>
          <Route path="/play" element={<MainGame />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
