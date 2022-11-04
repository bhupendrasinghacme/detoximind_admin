import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Page_1 from './Pages/Page_1';
import Page_2 from './Pages/Page_2';
import Page_3 from './Pages/Page_3';
import Page_4 from './Pages/Page_4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="page_1" element={<Page_1 />} />
        <Route path="page_2" element={<Page_2 />} />
        <Route path="page_3" element={<Page_3 />} />
        <Route path="page_4" element={<Page_4 />} />
        {/* <Route path="*" element={<NoPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
