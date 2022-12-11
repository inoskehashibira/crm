
import './App.css';
import Page1 from './components/forms/Form';
import Page2 from "./components/forms/Form2";
import Page3 from "./components/forms/Form3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/sales_pipeline/main';
import Submitted from './components/forms/Submitted';
import TestForm from './components/forms/TestForm';
import LeadForm from './components/forms/LeadForm';
import Tester from './components/forms/com/Tester';
function App() {
  return (
    // <div className="App">
    //   {/* <Page1 /> */}
    //   {/* <Page2 /> */}
    //   {/* <Page3 /> */}
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route exact path="/Page2" element={<Page2 />} />
        <Route exact path="/Page3" element={<Page3 />} />
        <Route exact path="/Submitted" element={<Submitted />} />
        <Route exact path="/pipeline" element={<Main />} />
        <Route exact path="/TestForm" element={<TestForm />} />
        <Route exact path="/l1" element={<LeadForm />} />
        <Route exact path="TESTER" element={<Tester />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
