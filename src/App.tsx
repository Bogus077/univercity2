import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/fonts/style.css';
import './assets/global.scss';
import { frontendRoutes } from './consts';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={frontendRoutes.main} element={<MainPage />} />

        {/* <Route
        path={frontendRoutes.index}
        element={<DashboardPage />}
      /> */}

        {/* Участники */}
        {/* <Route
        path={frontendRoutes.kids.list}
        element={<KidListPage />}
      />
      <Route
        path={`${frontendRoutes.kids.edit}/:id`}
        element={<EditKidPage />}
      />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
