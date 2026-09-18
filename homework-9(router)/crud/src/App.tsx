import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./components/PostsPage/PostsPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<PostsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
