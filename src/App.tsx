import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Service from "./pages/Service/Service";
import Introduce from "./pages/Introduce/Introduce";
function App() {
  return (
    <div className="w-full relative">
      <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="trangchu"  element={<HomePage/>}/>
            <Route path="gioi-thieu"  element={<Introduce/>}/>
            <Route path="dich-vu"  element={<Service/>}/>
          </Route>
          {/* <Route path="/gioithieu" element={<Introduce />} /> */}
        </Routes>
      </>

     
    </div>
  );
}

export default App;