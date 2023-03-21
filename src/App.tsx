import { Route, Routes, useLocation } from 'react-router-dom';
import AboutRouter from './modules/about/aboutPage';
import HomePage from './modules/home/homepage';
import ProjectsPage from './modules/projects/projectsPage';
import WorkRouter from './modules/work/router';
import { PreloadedImages } from './preloaded_images';
import Navbar from './shared/components/navbar';
import { SocialIcons } from './shared/components/socials';
import { ModalProvider } from './shared/hooks/useModal';

function App() {
  const location = useLocation();

  return (
    <>
      <ModalProvider>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutRouter />} />
          <Route path="/work/*" element={<WorkRouter />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </ModalProvider>
      <Navbar />
      <SocialIcons />
      <PreloadedImages />
    </>
  );
}

export default App;
