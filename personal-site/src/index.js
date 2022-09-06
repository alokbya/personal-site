import ReactDOM from 'react-dom/client';
import { BrowserRouter,
         Routes,
         Route,
       } from 'react-router-dom';
import App from './App';

import About from './routes/about.mjs';
import Distractions from './routes/distractions.mjs';
import Playables from './routes/playables.mjs';
import Readables from './routes/readables.mjs';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='playables' element={<Playables />} />
        <Route path='readables' element={<Readables />} />
        <Route path='about' element={<About />} />
        <Route path='distractions' element={<Distractions />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
