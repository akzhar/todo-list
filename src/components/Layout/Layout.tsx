import React from 'react';
import { Outlet } from 'react-router-dom';

import Logo from '@components/Logo';
import Message from '@components/Message';

const Layout: React.FC = () => (
  <div className="layout">
    <Message/>
    <main className="layout__content">
      <Logo/>
      <Outlet/>
    </main>
  </div>
);

export default Layout;
