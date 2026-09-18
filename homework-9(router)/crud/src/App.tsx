import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./components/PostsPage/PostsPage.tsx";
import NewPostPage from "./components/NewPostPage/NewPostPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="posts/new" element={<NewPostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
