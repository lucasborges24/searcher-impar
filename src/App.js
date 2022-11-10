import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardCreation from "./pages/CardCreation";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/card" element={<CardCreation />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
