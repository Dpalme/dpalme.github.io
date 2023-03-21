import { Route, Routes } from 'react-router-dom';
import { ImageFocus } from './imageFocus';
import WorkPage from './workPage';
import AndreasPage from './workProjects/andreas';
import BrujulaPage from './workProjects/brujula';
import MRPPage from './workProjects/mrp';

export const WorkRouter = () => {
  return (
    <Routes>
      <Route path="" element={<WorkPage />}></Route>
      <Route path="mrp" element={<MRPPage />} />
      <Route path="andreas" element={<AndreasPage />} />
      {/* <Route path="brujula" element={<BrujulaPage />} /> */}
    </Routes>
  );
};

export default WorkRouter;
