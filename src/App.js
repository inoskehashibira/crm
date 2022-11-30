
import './App.css';
import Page1 from './components/forms/Form';
import Page2 from "./components/forms/Form2";
import Page3 from "./components/forms/Form3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   {/* <Page1 /> */}
    //   {/* <Page2 /> */}
    //   {/* <Page3 /> */}
    // </div>

    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Page1 />} />
        <Route exact path="/Page2" element={<Page2 />} />
        <Route exact path="/Page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
