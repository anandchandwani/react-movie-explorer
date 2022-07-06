import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Trending } from "./pages/Trending/Trending";
import { Movies } from "./pages/Movies/Movies";
import Show from "./pages/Show/Show";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
