import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./components/PostsPage/PostsPage.tsx";
import NewPostPage from "./components/NewPostPage/NewPostPage.tsx";
import PostPage from "./components/PostPage/PostPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="posts/new" element={<NewPostPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
