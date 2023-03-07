import { Routes , Route } from "react-router";
import { AddInfo, Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addInfo" element={<AddInfo />} />
    </Routes>
  );
}

export default App;
