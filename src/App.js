import { lazy, Suspense } from "react";
import Loader from "react-loaders";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
const LandingPage = lazy(() => import("./components/landingPage/LandingPage"));

const Layout = lazy(() => import("./components/layout/Layout"));

function App() {
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/projects' element={<Projects />} /> */}
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
