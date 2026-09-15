import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu.tsx";
import HomePage from "./components/HomePage.tsx";
import DriftPage from "./components/DriftPage.tsx";
import ForzaPage from "./components/ForzaPage.tsx";
import TimeAttackPage from "./components/TimeAttackPage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
