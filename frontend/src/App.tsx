import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CustomersPage from "./pages/CustomersPage";
import CasesPage from "./pages/CasesPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/cases" element={<CasesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;