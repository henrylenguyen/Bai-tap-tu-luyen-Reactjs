import { Route, Routes } from "react-router-dom";
import LiveView from "./components/card/LiveView";
import Capstones from "./components/layout/Capstones";
import Nav from "./components/layout/Header";
import PageNotFound from "./components/layout/PageNotFound";
import ProjectList from "./components/layout/ProjectList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<ProjectList></ProjectList>}></Route>
          <Route path="/bai-tap-nho/:slug" element={<LiveView></LiveView>}>
          </Route>
          <Route path="/capstone" element={<Capstones></Capstones>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
