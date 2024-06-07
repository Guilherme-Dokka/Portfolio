import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Projects from "pages/projects";
import { Link } from "react-router-dom";

const Paths = () => {
  // Limpeza na desmontagem

  if (window.screen.width < 960) {
    <Link to="/" />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          if()
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
