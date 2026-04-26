import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomersPage from "./pages/CustomersPage";
import CasesPage from "./pages/CasesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/cases" element={<CasesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;