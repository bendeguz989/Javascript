import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Layout from "./Layout";
import Home from "./pages/Home";
import Feladat1 from "./pages/1.feladat";
import Feladat2 from "./pages/2.feladat";
import Feladat3 from "./pages/3.feladat";
import Feladat4 from "./pages/4.feladat";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="feladat1" element={<Feladat1/>} />
          <Route path="feladat2" element={<Feladat2/>} />
          <Route path="feladat3" element={<Feladat3/>} />
          <Route path="feladat4" element={<Feladat4 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));