import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Layout from '@components/Layout';
import AllPage from '@pages/AllPage';
import ActivePage from '@pages/ActivePage';
import CompletedPage from '@pages/CompletedPage';
import NotFoundPage from '@pages/NotFoundPage';
import { AppRoutes } from '@consts/const';

const App: React.FC = () => (
  <Routes>
    <Route path={AppRoutes.ALL} element={<Layout />}>
      <Route index element={<AllPage/>} />
      <Route path={AppRoutes.ACTIVE} element={<ActivePage/>} />
      <Route path={AppRoutes.COMPLETED} element={<CompletedPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
  </Routes>
);

export default App;
