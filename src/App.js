import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeView from "./containers/WelcomeView/WelcomeView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
