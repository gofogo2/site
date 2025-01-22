import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Works from './pages/Works';
import ProjectDetail from './pages/ProjectDetail';
import PageTransition from './components/PageTransition';
import ResolutionDisplay from './components/ResolutionDisplay';

function App() {
  return (
    <BrowserRouter>
      <ResolutionDisplay />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;