import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./layouts";
import Soldier from "./pages/Soldier";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Soldier />} />
          <Route path="multiplayer" element={<Soldier />} />
          <Route path="campagain" element={<Soldier />} />
          <Route path="soldier" element={<Soldier />} />
          <Route path="store" element={<Soldier />} />
          <Route path="more" element={<Soldier />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;