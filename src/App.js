import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Page_1 from './pages/Page_1';
import Page_2 from './pages/Page_2';
import Page_3 from './pages/Page_3';
import Page_4 from './pages/Page_4';
import EditGroup from './pages/EditGroup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="page_1" element={<Page_1 />} />
        <Route path="page_2" element={<Page_2 />} />
        <Route path="page_3" element={<Page_3 />} />
        <Route path="page_4" element={<Page_4 />} />
        <Route path="edit_group/:id" element={<EditGroup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
