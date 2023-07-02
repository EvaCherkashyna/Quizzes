import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Play, Home, Finish, Stats,SharedLayout } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <SharedLayout />
          }
        >
          <Route path="" element={<Home />} />
          <Route path="play/:id" element={<Play />} />
          <Route path="finish/:id" element={<Finish />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
